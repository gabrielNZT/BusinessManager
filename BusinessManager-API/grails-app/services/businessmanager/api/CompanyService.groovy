package businessmanager.api

import exceptions.RegisterCompanyException
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

    Company save(Company company){
        Company companyToSave = company.save()
        if(company.hasErrors()){
            transactionStatus.setRollbackOnly()
            throw new RegisterCompanyException(company.errors)
        }
        return companyToSave
    }

    Company handleRequestCompanyRegister (Object request){
        def requestCompany = request.company
        return new Company(name: requestCompany.name, cnpj: requestCompany.cnpj,
                corporateName: requestCompany.corporateName, fantasyName: requestCompany.fantasyName)
    }

    def registerCompany(Company company, User user){
        company.save()
        if(company.hasErrors()){
            transactionStatus.setRollbackOnly()
            throw new RegisterCompanyException(company.errors)
        }
        user.setCompany(company)
        user.save()
        if(user.hasErrors()){
            transactionStatus.setRollbackOnly()
            throw new RegisterCompanyException(user.errors)
        }
        company.addToUsers(user)
        userService.sendEmailPassword(user.email, user.password)
    }
}
