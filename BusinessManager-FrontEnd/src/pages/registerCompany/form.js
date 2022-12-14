import { Form, Button } from 'react-bootstrap'

function RegisterForm (props) {
    const {valueField, setCompany, handleState, handleNavigate} = props
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

    return (
        <Form onSubmit={props.handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                            {formGroups.map(row => (
                                <div>
                                    <Form.Group className={row.elements[1].className}>
                                        <Form.Label > {row.elements[1].text}
                                            <Form.Control
                                                required
                                                value={valueField(row.elements[1].key)}
                                                type='text'
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
    )
}
export default RegisterForm