package businessmanager.api

import security.User

class Company {

    String cnpj
    String name
    String fantasyName
    String corporateName

    static hasMany = [users: User]

    static constraints = {
        cnpj unique: true, blank: false, nullable: false
        name blank: false
        fantasyName blank: false
        corporateName blank: false
    }
}
