package security

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class UserCompanyController {

    UserCompanyService userCompanyService

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
