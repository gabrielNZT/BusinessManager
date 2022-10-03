import { Background, Logo } from "../../assets"
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './style.css'
import { useDispatch, useSelector } from "react-redux"
import { ChangePassword } from "../../services/request"
import { HasTemporaryPassword } from "../login/reducer/actions"

function ConfigPassword() {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useSelector(state => state.user.username)
    const [validate, setValidate] = useState(true);
    const handleNavigate = () => navigate("../", { replace: true })
    const [fieldValues, setFieldValues] = useState({
        password: '',
        againPassword: ''
    })
    const [visibleIcon, setVisibleIcon] = useState({
        password: 'password',
        againPassword: 'password'
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if(fieldValues.password !== fieldValues.againPassword){
            setValidate(false)
            
        } else {
            setValidate(true)
            ChangePassword(name, fieldValues.password).then(() => dispatch(HasTemporaryPassword()))
        }
    }

    return (
        <>
            <Background />
            <Logo />
            <div className="div-login-form">
                <div className="div-login-form-header">
                    <div className="prefix-icon">
                        <ArrowLeftOutlined onClick={handleNavigate} />
                    </div>
                    <h1 style={{ marginLeft: '3%' }}> Configurar nova senha</h1>
                </div>
                <div className='form-loginform'>
                    <p>Para sua segurança, informe uma nova senha para acessar o sistema. </p>
                    <Form onSubmit={handleSubmit} style={{ marginTop: '5%' }}>

                        <Form.Group className="group-password" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <div className='div-input-password'>
                                {visibleIcon.password === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon({
                                    ...visibleIcon,
                                    password: 'text'
                                })} className='sufix-icon' />
                                    : <EyeTwoTone onClick={() => setVisibleIcon({
                                        ...visibleIcon,
                                        password: 'password'
                                    })} className='sufix-icon'></EyeTwoTone>}
                                <Form.Control
                                    autoComplete="false"
                                    value={fieldValues.password}
                                    onChange={(e) => setFieldValues({ ...fieldValues, password: e.target.value })}
                                    required
                                    onBlur={() => setVisibleIcon({
                                        ...visibleIcon,
                                        password: 'password'
                                    })}
                                    type={visibleIcon.password}
                                    placeholder="Digite sua senha"></Form.Control>
                            </div>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="group-password" controlId="formBasicPassword1">
                            <Form.Label>Confirmar senha</Form.Label>
                            <div className='div-input-password'>
                                {visibleIcon.againPassword === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon({
                                    ...visibleIcon,
                                    againPassword: 'text'
                                })} className='sufix-icon' />
                                    : <EyeTwoTone onClick={() => setVisibleIcon({
                                        ...visibleIcon,
                                        againPassword: 'password'
                                    })} className='sufix-icon'></EyeTwoTone>}
                                <Form.Control
                                    required
                                    autoComplete="false"
                                    value={fieldValues.againPassword}
                                    onChange={(e) => setFieldValues({ ...fieldValues, againPassword: e.target.value })}
                                    onBlur={() => setVisibleIcon({
                                        ...visibleIcon,
                                        againPassword: 'password'
                                    })}
                                    type={visibleIcon.againPassword}
                                    placeholder="Confirme a nova senha"></Form.Control>
                            </div>
                            {!validate && <Form.Text className="text-muted"> As senhas devem ser iguais
                            </Form.Text>}
                        </Form.Group>
                        <div className='div-buttons'>
                            <Button className='button-submit-form' variant="primary" type="submit">SALVAR NOVA SENHA</Button>
                            <i>ou</i>
                            <Button onClick={handleNavigate} className='button-register' variant="primary" type="submit">VOLTAR PARA O LOGIN</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default ConfigPassword