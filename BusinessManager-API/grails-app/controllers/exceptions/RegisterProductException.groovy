package exceptions

import org.springframework.validation.Errors

class RegisterProductException extends Exception {
    Errors errors
    RegisterProductException (Errors errors){
        this.errors = errors
    }
}