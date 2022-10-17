import { Background, Logo } from '../../assets/index.js'
import { useNavigate } from 'react-router-dom'
import './style/styleSheets.css'
import ModalNotification from "../../global/modal"
import { useState } from 'react';
import { ToastNotify } from '../../global/toast/index.js'
import { cnpjIsValid } from '../../utils/index.js';
import { toast } from 'react-toastify'
import HeaderArrow from '../../global/components/headerBackToLogin/index.js'
import RegisterForm from './components/form.js';
import {cnpjMask, phoneMask} from '../../global/utils'


function Register() {
    const [modalOpen, setModalOpen] = useState(false)
    const [company, setCompany] = useState({
        cnpj: '',
        name: '',
        phone: '',
        email: '',
        corporateName: '',
        fantasyName: '',
    })

    let navigate = useNavigate();
    const handleNavigate = () => navigate("../", { replace: true });
    const handleState = (event, tag) => {
        const value = event.target.value
        if (tag === 'cnpj') company[tag] = cnpjMask(value);
        else if (tag === 'phone') company[tag] = phoneMask(value);
        else company[tag] = value;
        return { ...company }
    }

    const clearAllFields = () => {
        for (var element in company) {
            company[element] = ''
        }
    }

    const callBack = () => {
        setModalOpen(false)
        navigate("../", { replace: true })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { cnpj, name, fantasyName, corporateName, email, phone } = company
        const dataUser = { email, phone }
        const dataCompany = { cnpj, name, fantasyName, corporateName }

        if (cnpjIsValid(cnpj)) {
            ToastNotify({ type: 'REGISTER_PROMISE', payload: { company: dataCompany, user: dataUser } })
                .then(resp => {
                    if (resp.status === 201) {
                        setModalOpen(true)
                        clearAllFields()
                    }
                })
                .catch(request => {
                    console.log(request.response.data)
                    if ((request.response.data.total > 1)) {
                        request.response.data._embedded.errors.forEach(element => {
                            if ((element.message).indexOf("email") > 0) {
                                toast.error(element.message);
                                setCompany({ ...company, email: '' });
                                return
                            }
                            else if ((element.message).indexOf("cnpj") > 0) {
                                toast.error(element.message)
                                setCompany({ ...company, cnpj: '' })
                            }   
                        })
                    } else {
                        if ((request.response.data.message).indexOf("cnpj") > 0) setCompany({ ...company, cnpj: '' });
                        else if ((request.response.data.message).indexOf("email") > 0) setCompany({ ...company, email: '' });
                        toast.error(request.response.data.message);
                    }
                })
        } else if (!cnpjIsValid(cnpj)) {
            ToastNotify({ type: 'CNPJ_INVALID' })
            setCompany({ ...company, cnpj: '' })
        };

    }
    const valueField = (key) => {
        switch (key) {
            case 1:
                return company.name
            case 2:
                return company.cnpj
            case 3:
                return company.email
            case 4:
                return company.phone
            case 5:
                return company.fantasyName
            case 6:
                return company.corporateName
            default:
                return
        }
    }

    return (
        <>
            <Background />
            <Logo />
            {modalOpen && (<ModalNotification callBack={callBack}
                title='Confirme seu cadastro'
                body='enviaremos uma senha temporária para o email informado. Ao entrar no sistema pela primeira vez
                        será solicitado uma nova senha'
                setModalOpen={setModalOpen} />)}
            <div className="div-register-form">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <HeaderArrow customStyle={'div-login-form-header'} margin='3%' title='CADASTRE SUA EMPRESA' />
                    <div style={{ marginLeft: '40px', marginTop: '30px', fontWeight: '700' }}>
                        <h5 className=''>Para criar um conta na <span className='span-company-name'>BM</span>, entre com os dados da sua empresa</h5>
                    </div>
                </div>
                <div >
                    <RegisterForm
                        handleSubmit={handleSubmit}
                        valueField={valueField}
                        setCompany={setCompany}
                        handleState={handleState}
                        handleNavigate={handleNavigate}
                    />
                </div>
            </div>
        </>
    )
}
export default Register