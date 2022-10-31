package businessmanager.api

import exceptions.RegisterCompanyException
import exceptions.RegisterProductException
import exceptions.UpdateProductException
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
        if(product.hasErrors()) {
           throw new UpdateProductException(product.errors)
        }
    }

    String getProductCode(Long companyID) {
        Integer first_value = 0
        def result = Product.executeQuery("select max(id) as id from Product where company = ${Company.findById(companyID)}")
        def lastID = result[first_value] as Long
        return Long.toHexString((lastID + 1))
    }
}
