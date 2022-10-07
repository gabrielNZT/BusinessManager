package businessmanager.api

import grails.gorm.transactions.Transactional
import grails.views.api.http.Request
import security.User
import security.UserService

import javax.validation.ValidationException

@Transactional
class CompanyService{
    UserService userService

    Long count(){
        return Company.count
    }

    Company get(Long id){
        return Company.get(id)
    }

    def delete(Long id){
        Company.findById(id).delete()
    }

    List<Company> list(){
        return Company.list()
    }

    def save(Company user){
        user.save()
    }

    Company handleRequestCompanyRegister (Object request){
        def requestCompany = request.company
        return new Company(name: requestCompany.name, cnpj: requestCompany.cnpj,
                corporateName: requestCompany.corporateName, fantasyName: requestCompany.fantasyName)
    }

}
