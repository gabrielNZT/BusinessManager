package exceptions

import org.springframework.validation.Errors

class RegisterCompanyException extends Exception{
    Errors errors
    RegisterCompanyException(Errors errors){
        this.errors = errors
    }
}