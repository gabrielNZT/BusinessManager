package businessmanager.api

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class ProductServiceSpec extends Specification {

    ProductService productService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Product(...).save(flush: true, failOnError: true)
        //new Product(...).save(flush: true, failOnError: true)
        //Product product = new Product(...).save(flush: true, failOnError: true)
        //new Product(...).save(flush: true, failOnError: true)
        //new Product(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //product.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        productService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Product> productList = productService.list(max: 2, offset: 2)

        then:
        productList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        productService.count() == 5
    }

    void "test delete"() {
        Long productId = setupData()

        expect:
        productService.count() == 5

        when:
        productService.delete(productId)
        datastore.currentSession.flush()

        then:
        productService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Product product = new Product()
        productService.save(product)

        then:
        product.id != null
    }
}
