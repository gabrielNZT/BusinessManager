import { Background, Logo } from '../../assets/index.js'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './styleSheets.css'
import { Form, Button } from 'react-bootstrap';


function Register() {
    let navigate = useNavigate();

    const handleNavigate = () => navigate("../register-company", { replace: true });

    const formGroups = [
        {
            row: 1, elements: [{ key: 1, text: 'Nome', placeHolder: 'Digite o nome da empresa', className: 'div-form' },
            { key: 2, text: 'CNPJ', placeHolder: 'Digite o CNPJ da empresa', className: 'div-form' }]
        },
        {
            row: 2, elements: [{ key: 3, text: 'Email', placeHolder: 'Digite seu Email', className: 'div-form' },
            { key: 4, text: 'Telefone', placeHolder: 'Digite seu telefone', className: 'div-form' }]
        },
        {
            row: 2, elements: [{ key: 5, text: 'Nome Fantasia', placeHolder: 'Digite o nome fantasia da empresa', className: 'div-form' },
            { key: 6, text: 'Razão Social', placeHolder: 'Digite a razão social da empresa', className: 'div-form' }]
        }
    ]

    return (
        <>
            <Background />
            <Logo />
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
                    <Form style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                        {formGroups.map(row => (
                            <div>
                                <Form.Group key={row.elements[0].key} className={row.elements[0].className}>
                                    <Form.Label key={row.elements[0].key}> {row.elements[0].text}
                                        <Form.Control key={row.elements[0].key} placeholder={row.elements[0].placeHolder} />
                                    </Form.Label>
                                </Form.Group>

                                <Form.Group key={row.elements[1].key} className={row.elements[1].className}>
                                    <Form.Label key={row.elements[1].key}> {row.elements[1].text}
                                        <Form.Control key={row.elements[1].key} placeholder={row.elements[1].placeHolder} />
                                    </Form.Label>
                                </Form.Group>
                            </div>
                        ))}
                    </Form>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '25px' }}>
                    <Button className='button-register' variant="primary" type="submit">
                        CADASTRE-SE
                    </Button>

                    <div style={{height: '60px', width: '3%', marginTop: '10px'}}>
                        <i style={{height: '100%'}} className='i-ou'>ou</i>
                    </div>


                    <Button className='button-back-login' variant="primary" onClick={() => navigate("../register-company", { replace: true })}>
                        VOLTAR PARA O LOGIN
                    </Button>

                </div>
            </div>
        </>

    )
}
export default Register