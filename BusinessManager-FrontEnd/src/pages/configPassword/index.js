import { Background, Logo } from "../../assets"
import { useEffect, useState } from "react"
import './style/style.css'
import { useDispatch, useSelector } from "react-redux"
import { ChangePassword } from "../../services/request"
import { FetchCompanyNameConfigPage } from "../../store/login/actions"
import { HeaderArrow } from "../../global/components"
import ConfigPasswordForm from "./form";
import { useNavigate } from "react-router-dom"

function ConfigPassword() {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useSelector(state => state.auth.user.username)
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
            handleDispatch()
        }
    }

    async function handleDispatch() {
        await ChangePassword(name, fieldValues.password).then((response) => {
            dispatch(FetchCompanyNameConfigPage(response.data.company))
        }).then(() => navigate("../home", { replace: true }))
    }

    useEffect(() => {
        setValidate(fieldValues.password !== fieldValues.againPassword ? false : true)
    }, [fieldValues]);

    return (
        <>
            <Background />
            <Logo />
            <div className="div-login-form">
                <HeaderArrow customStyle={'div-login-form-header'} margin='3%' title='Configurar nova senha' />
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