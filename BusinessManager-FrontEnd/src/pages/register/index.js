import { Background, Logo } from '../../assets/index.js'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { IMaskInput } from 'react-imask'
import { useNavigate } from 'react-router-dom'
import './styleSheets.css'
import ModalNotification from "../../global/modal"
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { ToastNotify } from '../../global/toast/index.js'
import { cnpjIsValid } from '../../utils/index.js';


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
    console.log(company)
    let navigate = useNavigate();
    const handleNavigate = () => navigate("../", { replace: true });
    const handleState = (event, tag) => {
        const value = event.target.value
        company[tag] = value;
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

        const cnpjError = () => {
            ToastNotify({ type: 'CNPJ_ERROR' })
            setCompany({ ...company, cnpj: '' })
        }

        const emailError = () => {
            ToastNotify({ type: 'EMAIL_ERROR' })
            setCompany({ ...company, email: '' })
        }

        if (cnpjIsValid(cnpj)) {
            ToastNotify({ type: 'REGISTER_PROMISE', payload: { company: dataCompany, user: dataUser } })
                .then(resp => {
                    if (resp.status === 201) {
                        setModalOpen(true)
                        clearAllFields()
                    }
                })
                .catch(request => {
                    if (request.response.data.total > 1) {
                        request.response.data._embedded.errors.forEach(
                            error => {
                                if (error.message === 'CNPJ_NOT_UNIQUE') cnpjError();
                                else if (error.message === 'EMAIL_NOT_UNIQUE') emailError();
                            }
                        )
                    }
                    else if (request.response.data.message === 'CNPJ_NOT_UNIQUE') cnpjError();
                    else if (request.response.data.message === 'EMAIL_NOT_UNIQUE') emailError();
                    else clearAllFields();
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
    const formGroups = [
        {
            row: 1, elements: [{ key: 1, text: 'Nome', placeHolder: 'Digite o nome da empresa', className: 'div-form', tag: 'name' },
            { key: 2, text: 'CNPJ', placeHolder: 'Digite o CNPJ da empresa', className: 'div-form', tag: 'cnpj', mask: '00.000.000/0000-00' }]
        },
        {
            row: 2, elements: [{ key: 3, text: 'Email', placeHolder: 'Digite seu Email', className: 'div-form', tag: 'email' },
            { key: 4, text: 'Telefone', placeHolder: 'Digite seu telefone', className: 'div-form', tag: 'phone', mask: '(00) 0 0000-0000' }]
        },
        {
            row: 2, elements: [{ key: 5, text: 'Nome Fantasia', placeHolder: 'Digite o nome fantasia da empresa', className: 'div-form', tag: 'fantasyName' },
            { key: 6, text: 'Razão Social', placeHolder: 'Digite a razão social da empresa', className: 'div-form', tag: 'corporateName', mask: '' }]
        }
    ]

    function ModalNotify() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <ModalNotification
                        callBack={callBack}
                        title='Confirme seu cadastro'
                        body='enviaremos uma senha temporária para o email informado. Ao entrar no sistema pela primeira vez
                        será solicitado uma nova senha'
                        setModalOpen={setModalOpen} />
                </div>
            </div>
        )
    }

    function formatarCNPJ(v){
        v=v.replace(/\D/g,"")   
        v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        v = v.substr(0,18)
        return v
      }

    return (
        <>
            <Background />
            <Logo />
            {modalOpen && ModalNotify()}
            <div className="div-register-form">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="div-login-form-header">
                        <div className="prefix-icon">
                            <ArrowLeftOutlined onClick={handleNavigate} />
                        </div>
                        <h1 style={{ marginLeft: '3%' }}>CADASTRE SUA EMPRESA</h1>
                    </div>
                    <div style={{ marginLeft: '40px', marginTop: '30px', fontWeight: '700' }}>
                        <h5 className=''>Para criar um conta na <span className='span-company-name'>BM</span>, entre com os dados da sua empresa</h5>
                    </div>
                </div>
                <div >
                    <Form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                            {formGroups.map(row => (
                                <div>
                                    <Form.Group className={row.elements[1].className}>
                                        <Form.Label > {row.elements[1].text}
                                            <Form.Control
                                                required
                                                value={valueField(row.elements[1].key).replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")}
                                                type='text'
                                                as={row.elements[1].mask !== undefined ? IMaskInput : 'input'}
                                                mask={row.elements[1].mask !== undefined ? row.elements[1].mask : null}
                                                onChange={(event) => setCompany(() => handleState(event, row.elements[1].tag))}
                                                key={row.elements[1].key}
                                                placeholder={row.elements[1].placeHolder} />
                                        </Form.Label>

                                    </Form.Group>

                                    <Form.Group className={row.elements[0].className}>
                                        <Form.Label > {row.elements[0].text}
                                            <Form.Control
                                                required
                                                value={valueField(row.elements[0].key)}
                                                onChange={(event) => setCompany(() => handleState(event, row.elements[0].tag))}
                                                key={row.elements[0].key}
                                                placeholder={row.elements[0].placeHolder} />
                                        </Form.Label>
                                    </Form.Group>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '25px' }}>
                            <Button className='button-register-company' variant="primary" type="submit">
                                CADASTRE-SE
                            </Button>

                            <div style={{ height: '60px', width: '3%', marginTop: '10px' }}>
                                <i style={{ height: '100%' }} className='i-ou'>ou</i>
                            </div>

                            <Button className='button-back-login' variant="primary" onClick={handleNavigate}>
                                VOLTAR PARA O LOGIN
                            </Button>

                        </div>
                    </Form>
                </div>
            </div>
        </>

    )
}
export default Register