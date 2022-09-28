import { toast } from "react-toastify"
import { SignIn } from "../../services/security/auth"

export function ToastNotify(action, callBack) {

    switch (action.type) {
        case 'LOGIN_PROMISE':
            return (
                toast.promise(
                    SignIn(action.payload.user).then(callBack()),
                    {
                        pending: '...loading',
                        success: 'Usuário válido',
                        error: 'Campos inválidos'
                    }
                )
            )
        default:
            return
    }
}