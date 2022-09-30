import { toast } from "react-toastify"
import { PasswordRecover, RegisterCompany } from "../../services/request"
import { SignIn } from "../../services/security/auth"

export function ToastNotify(action, callBack) {
    const payload = action.payload

    switch (action.type) {
        case 'LOGIN_PROMISE':
            return (
                toast.promise(
                    SignIn(payload?.user).then(callBack()),
                    {
                        pending: '...loading',
                        success: 'Usuário válido',
                        error: 'Campos inválidos'
                    }
                )
            )
        case 'FORGET_PASSWORD_PROMISE':
            return (
                toast.promise(
                    PasswordRecover(payload?.email),
                    {
                        pending: "...loading"
                    }
                )
            )
        
        case 'REGISTER_PROMISE':
            return(
                toast.promise(
                    RegisterCompany(payload.company, payload.user),
                    {
                        pending: "...loading"
                    }
                )
            )
        case 'CNPJ_ERROR':
            return (
                toast.error ('Esse CNPJ já está em uso')
            )
        case 'EMAIL_ERROR':
            return (
                toast.error ('Esse email já está em uso')
            )

        default:
            return
    }
}