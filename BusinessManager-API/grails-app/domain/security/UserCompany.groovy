package security

import businessmanager.api.Company

class UserCompany {
    User user

    static belongsTo = [company: Company]

    static constraints = {
        user nullable: false
    }
}   
