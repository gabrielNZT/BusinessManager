package security

import businessmanager.api.Company

class UserCompany {
    User user
    Company company

    static constraints = {
        user nullable: false
    }
}   
