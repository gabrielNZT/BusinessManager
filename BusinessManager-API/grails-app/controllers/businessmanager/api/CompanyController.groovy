package businessmanager.api

import exceptions.RegisterCompanyException
import grails.validation.ValidationException
import security.User
import security.UserService

import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class CompanyController {

    CompanyService companyService
    UserService userService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond companyService.list(params), model:[companyCount: companyService.count()]
    }

    def show(Long id) {
        respond companyService.get(id)
    }

    @Transactional
    def registerCompany() {
        def request = request.getJSON()
        User user = userService.handleRequestUserRegister(request)
        Company company = companyService.handleRequestCompanyRegister(request)

        try {
            companyService.save(company)
        } catch (ValidationException e){
            respond company.errors
            return
        }

        try {
            userService.save(user)
        } catch (RegisterCompanyException e) {
            respond e.errors
            return
        }
        company.addToUsers(user)
        userService.sendEmailPassword(user.email, user.password)
        respond company, [status: CREATED, view: "show"]
    }

    @Transactional
    def save(Company company) {
        if (company == null) {
            render status: NOT_FOUND
            return
        }
        if (company.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond company.errors
            return
        }

        try {
            companyService.save(company)
        } catch (ValidationException e) {
            respond company.errors
            return
        }

        respond company, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Company company) {
        if (company == null) {
            render status: NOT_FOUND
            return
        }
        if (company.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond company.errors
            return
        }

        try {
            companyService.save(company)
        } catch (ValidationException e) {
            respond company.errors
            return
        }

        respond company, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || companyService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
