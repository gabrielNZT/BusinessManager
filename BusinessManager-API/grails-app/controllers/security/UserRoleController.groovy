package security

import exceptions.UpdateUserException
import grails.converters.JSON
import grails.validation.ValidationException

import static org.springframework.http.HttpStatus.BAD_REQUEST
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class UserRoleController {

    UserRoleService userRoleService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond userRoleService.list(params), model:[userRoleCount: userRoleService.count()]
    }

    def getListUser(Integer pageSize, Integer current, String sort  , String filters) {
        Object results = userRoleService.getList(pageSize, current, sort ,filters)
        def model = [
                userRoleList: results,
                totalCount: results.totalCount as Integer
        ]
        respond model
    }

    def show(Long id) {
        respond userRoleService.get(id)
    }

    @Transactional
    def save(UserRole userRole) {
        if (userRole == null) {
            render status: NOT_FOUND
            return
        }
        if (userRole.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond userRole.errors
            return
        }

        try {
            userRoleService.save(userRole)
        } catch (ValidationException e) {
            respond userRole.errors
            return
        }

        respond userRole, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(UserRole userRole) {
        if (userRole == null) {
            render status: NOT_FOUND
            return
        }
        if (userRole.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond userRole.errors
            return
        }

        try {
            userRoleService.save(userRole)
        } catch (ValidationException e) {
            respond userRole.errors
            return
        }

        respond userRole, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || userRoleService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }

    @Transactional
    def updateUser() {
        try {
            userRoleService.updateUser(request.getJSON())
        } catch (UpdateUserException ex) {
            respond ex.errors
        }
        respond status: OK
    }

    @Transactional
    def deleteUser(Long id) {
        UserRole userRole = UserRole.findByUser(User.findById(id))

        if(userRole == null) {
            respond status: BAD_REQUEST
            return
        }
        try {
            userRole.delete()
        } catch (ValidationException ex) {
            respond ex.errors
        }
        respond status: NO_CONTENT
    }
}
