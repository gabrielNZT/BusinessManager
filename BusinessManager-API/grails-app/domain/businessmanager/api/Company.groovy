package businessmanager.api

import security.UserCompany

class Company {

    String cnpj
    String name
    String phone
    String fantasyName
    String corporateName

    static hasMany = [userCompany: UserCompany]

    static constraints = {
        cnpj unique: true, blank: false, nullable: false
        name blank: false
        fantasyName blank: false
        corporateName blank: false
    }
}
