import { toast } from "react-toastify"
import { PasswordRecover, RegisterCompany, SignIn } from "../../services/request"

export function ToastNotify(action, callBack) {
    const payload = action.payload

    switch (action.type) {
        case 'LOGIN_PROMISE':
            return (
                toast.promise(
                    SignIn(payload?.user).then(callBack()),
                    {
                        pending: '...loading',
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
            return (
                toast.promise(
                    RegisterCompany(payload.company, payload.user),
                    {
                        pending: "...loading"
                    }
                )
            )
        case 'CNPJ_INVALID':
            return (
                toast.error('Esse CNPJ é inválido')
            )
        default:
            return
    }
}