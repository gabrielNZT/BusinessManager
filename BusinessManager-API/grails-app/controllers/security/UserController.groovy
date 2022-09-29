package security

import grails.plugins.mail.MailService
import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class UserController {

    UserService userService
    MailService mailService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond userService.list(params), model:[userCount: userService.count()]
    }

    @Transactional
    def recoverPassword(){
        def request = request.getJSON()
        User user = new User()
        if( request != null ){
            user = User.findByEmail(request.email)
            if(user == null){
                respond NOT_FOUND
            }
        } else {
            respond UNPROCESSABLE_ENTITY
        }

        String newPassword = userService.generatePassword()
        user.setPassword(newPassword)
        user.setVersion((user.version + 1))

        mailService.sendMail {
            to user.email
            subject "NOVA SENHA"
            text "Sua senha de acesso temporária é: $newPassword"
        }

        respond user, [status: OK, view: "show"]
    }

    def show(Long id) {
        respond userService.get(id)
    }

    @Transactional
    def save(User user) {
        if (user == null) {
            render status: NOT_FOUND
            return
        }
        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors
            return
        }

        try {
            userService.save(user)
        } catch (ValidationException e) {
            respond user.errors
            return
        }

        respond user, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(User user) {
        if (user == null) {
            render status: NOT_FOUND
            return
        }
        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors
            return
        }

        try {
            userService.save(user)
        } catch (ValidationException e) {
            respond user.errors
            return
        }

        respond user, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || userService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
