import { Button, Form } from "react-bootstrap"
import { Background, Logo } from "../../assets"
import { ArrowLeftOutlined } from '@ant-design/icons'
import './stylesheets.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import ModalNotification from "../../global/modal"
import { ToastNotify } from "../../global/toast";
import { useDispatch } from "react-redux";
import { HasTemporaryPassword } from '../login/reducer/actions'


export function ForgetPassword() {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        ToastNotify({ type: 'FORGET_PASSWORD_PROMISE', payload: { email } })
            .then(() => dispatch(HasTemporaryPassword()))
            .finally(() => {
                setEmail('');
                setModalOpen(true)
            })
    }

    const handleNavigate = () => {
        navigate('../', { replace: true })
    }

    function ModalNotify() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <ModalNotification
                        title='Verifique seu email'
                        body='Caso o email informado esteja cadastrado no sistema, você
              receberá uma mensagem com a nova senha temporária.'
                        setModalOpen={setModalOpen} />
                </div>
            </div>
        )
    }

    return (
        <>
            <Background />
            <Logo />
            {modalOpen && ModalNotify()}
            <div className="div-login-form">
                <div className="div-login-form-header">
                    <div className="prefix-icon">
                        <ArrowLeftOutlined onClick={handleNavigate} />
                    </div>
                    <h1 style={{ marginLeft: '3%' }}> Esqueci a senha</h1>
                </div>
                <div className='form-loginform'>
                    <p>Para recuperar sua senha, informe seu email. Enviaremos
                        uma nova senha temporária, lembre-se de alterá-la na
                        próxima vez que acessar o sistema. </p>
                    <Form onSubmit={handleSubmit} style={{ marginTop: '10%' }}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                type="email"
                                placeholder="Digite seu email" />
                        </Form.Group>
                        <div className='div-buttons' style={{ marginTop: '10%' }}>
                            <Button className='button-submit-form' variant="primary" type="submit">RECUPERAR A SENHA</Button>
                            <i>ou</i>
                            <Button onClick={handleNavigate} className='button-register' variant="primary" type="submit">VOLTAR PARA O LOGIN</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default ForgetPassword