import { Background, Logo } from "../../assets"
import { useEffect, useState } from "react"
import './style/style.css'
import { useDispatch, useSelector } from "react-redux"
import { ChangePassword } from "../../services/request"
import { HasTemporaryPassword } from "../login/reducer/actions"
import HeaderArrow from "../../global/components/headerBackToLogin"
import ConfigPasswordForm from "./components/form";

function ConfigPassword() {
    const dispatch = useDispatch()

    const name = useSelector(state => state.user.username)
    const [validate, setValidate] = useState(true);

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
        if (fieldValues.password !== fieldValues.againPassword) {
            setValidate(false)

        } else {
            setValidate(true)
            ChangePassword(name, fieldValues.password).then(() => dispatch(HasTemporaryPassword()))
        }
    }

    useEffect(() => {
        setValidate(fieldValues.password !== fieldValues.againPassword ? false : true)
    }, [fieldValues]);

    return (
        <>
            <Background />
            <Logo />
            <div className="div-login-form">
                <HeaderArrow title='Configurar nova senha' />
                <div className='form-loginform'>
                    <p>Para sua segurança, informe uma nova senha para acessar o sistema. </p>
                    <ConfigPasswordForm
                        handleSubmit={handleSubmit}
                        setFieldValues={setFieldValues}
                        setVisibleIcon={setVisibleIcon}
                        fieldValues={fieldValues}
                        validate={validate}
                        visibleIcon={visibleIcon}
                    />
                </div>
            </div>
        </>
    )
}
export default ConfigPassword