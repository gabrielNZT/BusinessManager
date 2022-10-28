package exceptions

import org.springframework.validation.Errors

class UpdateUserException extends Exception {
    Errors errors
    UpdateUserException(Errors errors) {
        this.errors = errors
    }
}