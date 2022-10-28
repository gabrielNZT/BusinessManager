package businessmanager.api

import exceptions.RegisterCompanyException
import exceptions.RegisterProductException
import exceptions.UpdateProductException
import grails.gorm.services.Service
import grails.gorm.transactions.Transactional

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
        product.productImage = requestJSON.productPhoto == null? null : requestJSON.productPhoto.base64
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
}
