package security

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class UserCompanyServiceSpec extends Specification {

    UserCompanyService userCompanyService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new UserCompany(...).save(flush: true, failOnError: true)
        //new UserCompany(...).save(flush: true, failOnError: true)
        //UserCompany userCompany = new UserCompany(...).save(flush: true, failOnError: true)
        //new UserCompany(...).save(flush: true, failOnError: true)
        //new UserCompany(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //userCompany.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        userCompanyService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<UserCompany> userCompanyList = userCompanyService.list(max: 2, offset: 2)

        then:
        userCompanyList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        userCompanyService.count() == 5
    }

    void "test delete"() {
        Long userCompanyId = setupData()

        expect:
        userCompanyService.count() == 5

        when:
        userCompanyService.delete(userCompanyId)
        datastore.currentSession.flush()

        then:
        userCompanyService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        UserCompany userCompany = new UserCompany()
        userCompanyService.save(userCompany)

        then:
        userCompany.id != null
    }
}
