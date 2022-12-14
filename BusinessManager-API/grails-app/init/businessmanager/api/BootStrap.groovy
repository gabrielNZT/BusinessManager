package businessmanager.api

import grails.gorm.transactions.Transactional
import security.User
import security.Role
import security.UserRole

import java.text.SimpleDateFormat

class BootStrap {

    def init = { servletContext ->
        addUsers()
        addProducts()
    }

    @Transactional
    void addUsers(){

        Date date = new SimpleDateFormat("dd/MM/yyyy").parse("12/04/2022")
        Role.findByAuthority('Administrador')?: new Role(authority: 'Administrador').save(flush: true)
        Role.findByAuthority('Gerente')?: new Role(authority: 'Gerente').save(flush: true)
        Role.findByAuthority('Operador')?: new Role(authority: 'Operador').save(flush: true)
        Company company = Company.findByName("RAV")
        if(company == null){
            company = new Company (name: "RAV", cnpj: "33.014.556/0001-96", corporateName: "RAV TEC",
                    fantasyName: "RAV").save(flush: true)
        }

        if(User.findByUsername('gabrielAdmin') == null){
            new User(name: "Gbariel gerente" ,username: 'gabrielAdmin', password: 'admin', phone: "892243",
                    birthDate: date, contractDate: date, cpf: '123.222.202-11',
                    email: 'gabrielnunescesarino@gmail.com', company: company).save(flush: true)
        }

        if(User.findByUsername('gabrielUser') == null){
            new User(name: "vitor gabriel", birthDate: date,username: 'gabrielUser', phone: "892243",
                    password: 'admin', email: 'user@gmail.com', contractDate: date, cpf: '652.123.125-66',
                    company: company).save(flush: true)
        }

        for(int i in 1..10) {
            Integer randomNumber = Math.floor((Math.random() * 1000)).toInteger()
            User user = new User(name: "teste${randomNumber}" ,username: "teste${randomNumber}", password: 'admin', phone: "892243",
                    birthDate: date, contractDate: date, cpf: '123.222.202-11',
                    email: "teste${randomNumber}@gmail.com", company: company).save(flush: true)
            new UserRole(user: user, role: Role.findByAuthority('Operador')).save(flush: true)
        }


        if(User.findByUsername('gabrielAdmin') != null && Role.findByAuthority('Administrador') != null){
            new UserRole(user: User.findByUsername('gabrielAdmin'),
                    role: Role.findByAuthority('Administrador')).save(flush: true)
        }

        if(User.findByUsername('gabrielUser') != null && Role.findByAuthority('Operador') != null){
            new UserRole(user: User.findByUsername('gabrielUser'),
            role: Role.findByAuthority('Operador')).save(flush: true)
        }

    }

    @Transactional
    void addProducts() {
        new Product(name: 'maça', code: '000001', company: Company.findById(1), price: 'R$ 10,00',
                isEnabled: true, stock: 10, minStock: 5, unity: 'KG' ).save(flush: true)
        new Product(name: 'pera', code: '000002', company: Company.findById(1), price: 'R$ 5,00',
                isEnabled: true, stock: 20, minStock: 3, unity: 'UN').save(flush: true)
    }
    def destroy = {
    }
}
