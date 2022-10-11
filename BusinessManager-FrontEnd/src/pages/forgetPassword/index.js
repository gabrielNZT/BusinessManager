import { Background, Logo } from "../../assets"
import './style/stylesheets.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import ModalNotification from "../../global/modal"
import { ToastNotify } from "../../global/toast";
import { useDispatch } from "react-redux";
import { HasTemporaryPassword } from '../login/reducer/actions'
import HeaderArrow from "../../global/components/headerBackToLogin";
import ForgetPasswordForm from "./components/form";


export function ForgetPassword() {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const callBack = () => {
        navigate("../", { replace: true })
        setModalOpen(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        ToastNotify({ type: 'FORGET_PASSWORD_PROMISE', payload: { email } })
            .then(() => dispatch(HasTemporaryPassword()))
            .finally(() => {
                setEmail('');
                setModalOpen(true)
            })
    }

    return (
        <>
            <Background />
            <Logo />
            {modalOpen && (<ModalNotification callBack={callBack}
                title='Verifique seu email'
                body='Caso o email informado esteja cadastrado no sistema, você
              receberá uma mensagem com a nova senha temporária.'
                setModalOpen={setModalOpen} />)}
            <div className="div-login-form">
                <HeaderArrow title='Esqueci a senha' />
                <div className='form-loginform'>
                    <p>Para recuperar sua senha, informe seu email. Enviaremos
                        uma nova senha temporária, lembre-se de alterá-la na
                        próxima vez que acessar o sistema. </p>
                    <ForgetPasswordForm handleSubmit={handleSubmit} setEmail={setEmail} email={email}/>
                </div>
            </div>
        </>
    )
}
export default ForgetPassword