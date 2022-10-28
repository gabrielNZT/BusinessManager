package exceptions

import org.springframework.validation.Errors

class UpdateProductException extends Exception {
    Errors errors
    UpdateProductException(Errors errors) {
        this.errors = errors
    }
}