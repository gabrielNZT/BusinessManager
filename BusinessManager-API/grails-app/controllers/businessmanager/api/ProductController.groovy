package businessmanager.api

import exceptions.RegisterProductException
import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class ProductController {

    ProductService productService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index() {
        respond productService.list(), [status: OK, view: "showList"]
    }

    def show(Long id) {
        respond productService.get(id)
    }

    @Transactional
    def save(Product product) {
        if (product == null) {
            render status: NOT_FOUND
            return
        }
        if (product.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond product.errors
            return
        }

        try {
            productService.save(product)
        } catch (ValidationException e) {
            respond product.errors
            return
        }

        respond product, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Product product) {
        if (product == null) {
            render status: NOT_FOUND
            return
        }
        if (product.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond product.errors
            return
        }

        try {
            productService.save(product)
        } catch (ValidationException e) {
            respond product.errors
            return
        }

        respond product, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || productService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }

    @Transactional
    def saveProduct(){
        try {
            productService.saveProduct(request.getJSON())
        } catch (RegisterProductException ex) {
            respond ex.errors
        }
        respond CREATED
    }
}
