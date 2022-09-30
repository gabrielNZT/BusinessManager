package security

import grails.gorm.services.Service

@Service(UserCompany)
interface UserCompanyService {

    UserCompany get(Serializable id)

    List<UserCompany> list(Map args)

    Long count()

    UserCompany delete(Serializable id)

    UserCompany save(UserCompany userCompany)

}
