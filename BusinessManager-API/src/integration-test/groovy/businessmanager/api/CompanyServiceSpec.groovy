package businessmanager.api

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class CompanyServiceSpec extends Specification {

    CompanyService companyService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Company(...).save(flush: true, failOnError: true)
        //new Company(...).save(flush: true, failOnError: true)
        //Company company = new Company(...).save(flush: true, failOnError: true)
        //new Company(...).save(flush: true, failOnError: true)
        //new Company(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //company.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        companyService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Company> companyList = companyService.list(max: 2, offset: 2)

        then:
        companyList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        companyService.count() == 5
    }

    void "test delete"() {
        Long companyId = setupData()

        expect:
        companyService.count() == 5

        when:
        companyService.delete(companyId)
        datastore.currentSession.flush()

        then:
        companyService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Company company = new Company()
        companyService.save(company)

        then:
        company.id != null
    }
}
