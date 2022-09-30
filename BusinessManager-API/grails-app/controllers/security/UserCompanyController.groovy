package security

import businessmanager.api.Company
import businessmanager.api.CompanyService
import grails.validation.ValidationException

import static org.springframework.http.HttpStatus.CONFLICT
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class UserCompanyController {

    UserCompanyService userCompanyService
    UserService userService
    CompanyService companyService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond userCompanyService.list(params), model:[userCompanyCount: userCompanyService.count()]
    }

    def show(Long id) {
        respond userCompanyService.get(id)
    }

    @Transactional
    def registerCompany(){
        def request = request.getJSON()

        Company company = new Company()
        String email = request.user.email
        String phone = request.user.phone

        if(request.company == null){
            respond status: UNPROCESSABLE_ENTITY
            return
        }
        else company = request.company

        if(User.findByEmail(email) != null){
            respond(status: EXPECTATION_FAILED)
            return
        }

        if(Company.findByCnpj(company.cnpj) != null){
            respond(status: CONFLICT)
            return
        }

        try{
            companyService.save(company)
        } catch (ValidationException e){
            respond company.errors
            return
        }
        String password = userService.generatePassword()
        User user = new User(username: email, email: email, password: password, phone: phone, enabled: true,
        accountExpired: false, accountLocked: false, passwordExpired: false).save(flush: true)

        UserCompany userCompany = new UserCompany(user: user, company: company).save(flush: true)
        userService.sendEmailPassword(email, password)
        respond userCompany, [status: CREATED, view: "show"]
    }

    @Transactional
    def save(UserCompany userCompany) {
        if (userCompany == null) {
            render status: NOT_FOUND
            return
        }
        if (userCompany.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond userCompany.errors
            return
        }

        try {
            userCompanyService.save(userCompany)
        } catch (ValidationException e) {
            respond userCompany.errors
            return
        }

        respond userCompany, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(UserCompany userCompany) {
        if (userCompany == null) {
            render status: NOT_FOUND
            return
        }
        if (userCompany.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond userCompany.errors
            return
        }

        try {
            userCompanyService.save(userCompany)
        } catch (ValidationException e) {
            respond userCompany.errors
            return
        }

        respond userCompany, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || userCompanyService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
