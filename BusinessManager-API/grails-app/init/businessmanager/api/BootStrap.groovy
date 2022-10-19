package businessmanager.api

import grails.gorm.transactions.Transactional
import security.RoleService
import security.User
import security.Role
import security.UserRole

class BootStrap {

    def init = { servletContext ->
        addUsers()
    }

    @Transactional
    void addUsers(){


        Role.findByAuthority('ROLE_USER')?: new Role(authority: 'ROLE_USER').save(flush: true)

        Role.findByAuthority('ROLE_ADMIN')?: new Role(authority: 'ROLE_ADMIN').save(flush: true)

        Company company = Company.findByName("RAV")
        if(company == null){
            company = new Company (name: "RAV", cnpj: "33.014.556/0001-96", corporateName: "RAV TEC",
                    fantasyName: "RAV").save(flush: true)
        }

        if(User.findByUsername('gabrielAdmin') == null){
            new User(name: "Gbariel gerente" ,username: 'gabrielAdmin', password: 'admin', phone: "892243",
                    birthDate: new Date(), contractDate: new Date(), cpf: '123.222.202-11',
                    email: 'gabrielnunescesarino@gmail.com', company: company).save(flush: true)
        }


        if(User.findByUsername('gabrielUser') == null){
            new User(name: "vitor gabriel", birthDate: new Date(),username: 'gabrielUser', phone: "892243",
                    password: 'admin', email: 'user@gmail.com', contractDate: new Date(), cpf: '652.123.125-66',
                    company: company).save(flush: true)
        }

        if(User.findByUsername('gabrielAdmin') != null && Role.findByAuthority('ROLE_ADMIN') != null){
            new UserRole(user: User.findByUsername('gabrielAdmin'),
                    role: Role.findByAuthority('GERENTE')).save(flush: true)
        }

        if(User.findByUsername('gabrielUser') != null && Role.findByAuthority('ROLE_USER') != null){
            new UserRole(user: User.findByUsername('gabrielUser'),
            role: Role.findByAuthority('OPERADOR')).save(flush: true)
        }
    }
    def destroy = {
    }
}
