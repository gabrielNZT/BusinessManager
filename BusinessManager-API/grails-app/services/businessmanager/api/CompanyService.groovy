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

    Company registerCompany(Request request){
        def user = request.user
        def company = request.company

        Company companyToSave

        if(User.findByEmail(user.email) != null) return null
        else {
            companyToSave = new Company(cnpj: company.cnpj, corporateName: company.corporateName,
                    fantasyName: company.fantasyName, users: )
        }

        return companyToSave
    }
}
