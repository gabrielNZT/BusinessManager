package businessmanager.api

import grails.gorm.transactions.Transactional
import security.RoleService
import security.User
import security.Role
import security.UserRole

class BootStrap {

    def init = { servletContext ->
        addUsers()
        addProducts()
    }

    @Transactional
    void addUsers(){

        Role.findByAuthority('ADMINISTRADOR')?: new Role(authority: 'ADMINISTRADOR').save(flush: true)

        Role.findByAuthority('OPERADOR')?: new Role(authority: 'OPERADOR').save(flush: true)

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

        if(User.findByUsername('gabrielAdmin') != null && Role.findByAuthority('ADMINISTRADOR') != null){
            new UserRole(user: User.findByUsername('gabrielAdmin'),
                    role: Role.findByAuthority('ADMINISTRADOR')).save(flush: true)
        }

        if(User.findByUsername('gabrielUser') != null && Role.findByAuthority('OPERADOR') != null){
            new UserRole(user: User.findByUsername('gabrielUser'),
            role: Role.findByAuthority('OPERADOR')).save(flush: true)
        }

    }

    @Transactional
    void addProducts() {
        new Product(name: 'maça', code: '00001', company: Company.findById(1), price: 'R$ 10,00',
                isEnabled: true, stock: 10, minStock: 5, unity: 'KG' ).save(flush: true)
        new Product(name: 'pera', code: '00002', company: Company.findById(1), price: 'R$ 10,00',
                isEnabled: true, stock: 20, minStock: 3, unity: 'UN').save(flush: true)
    }
    def destroy = {
    }
}
