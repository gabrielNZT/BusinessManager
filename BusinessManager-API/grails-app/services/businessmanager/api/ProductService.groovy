package businessmanager.api

import exceptions.RegisterCompanyException
import exceptions.RegisterProductException
import exceptions.UpdateProductException
import grails.converters.JSON
import grails.gorm.services.Service
import grails.gorm.transactions.Transactional
import groovy.sql.Sql
import org.springframework.beans.factory.annotation.Autowired

import javax.sql.DataSource

@Transactional
class ProductService {

    Product get (Long id) {
        return Product.findById(id)
    }

    Product save(Product product){
        Product productToSave = product.save()
        if(product.hasErrors()){
            transactionStatus.setRollbackOnly()
            throw new RegisterProductException(product.errors)
        }
        return productToSave
    }

    List<Product> list() {
        return Product.list()
    }

    Long count(){
        return Product.count
    }

    Product delete(Long id) {
        return (Product.findById(id)).delete()
    }

    void saveProduct(Object requestJSON) {
        Product product = new Product()
        def map = requestJSON as Map
        // product.properties = request
        // def requestJSON = request.getJSON()
        product.properties = map
        product.productImage = requestJSON.productPhoto == null? null : requestJSON.productPhoto.base64.decodeBase64()
        product.contentType = requestJSON.productPhoto == null? null : requestJSON.productPhoto.contentType
        save(product)
    }

    void updateProduct(Object request) throws UpdateProductException {
        Product product = Product.findById(request.id)
        def map = request as Map
        product.properties = map
        if(map.productPhoto != null) {
            product.productImage = map.productPhoto.base64.decodeBase64()
            product.contentType = map.productPhoto.contentType
        }

        if(product.hasErrors()) {
           throw new UpdateProductException(product.errors)
        }
    }

    String getProductCode(Long companyID) {
        Integer first_value = 0

        def result = Product.executeQuery("select max(code) as code from Product where company = ${Company.findById(companyID)}")
        def converterToLong = Long.valueOf((result[first_value]) as String)
        def lastID = (converterToLong?: 0) as Long
        return Long.toHexString((lastID + 1))
    }

    Object listProducts(Integer pageSize, Integer current, String sort, String filters) {
        def productFilters = JSON.parse(filters)
        def c = Product.createCriteria()
        def offset = (pageSize * (current - 1))
        def max = (pageSize * current)
        def results = c.list(max: max, offset: offset) {
            order("name", sort)
            productFilters.name? like("name", "%${productFilters.name.value}%") : null
            productFilters.code? eq("code", productFilters.code.value) : null
            productFilters.price? like("price", "${productFilters.price.value}") : null
            productFilters.stock? eq("stock", productFilters.stock.value) : null
            productFilters.unity? eq("unity", productFilters.unity.value) : null
            productFilters.minStock? eq("minStock", productFilters.minStock.value) : null
            productFilters.enabled? eq("isEnabled", productFilters.enabled.value != "Desativado") : null
        }
        return results
    }
}
