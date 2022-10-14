import { Form } from "react-bootstrap"

function FormRegisterUser() {

    const items = [
        { type: 'input', label: 'Nome', placeholder: 'Digite o nome' },
        { type: 'input', label: 'Nome de Usuário', placeholder: 'Digite o nome de usuário'},
        { type: 'input', label: 'Email', placeholder: 'Digite o email' },
        { type: 'input', label: 'Telefone', placeholder: 'Digite o telefone' },
        { type: 'input', label: 'CPF', placeholder: 'Digite o cpf' },
        { type: 'select', label: 'Permissão', placeholder: 'Escolha a permissão' },
        { type: 'select', label: 'Ativo?', },
        { type: 'input', label: 'Senha', mask: 'password', placeholder: 'Digite a senha' },
        { type: 'input', label: 'Confirmar senha', mask: 'password',placeholder: 'Confirme a senha'},
        { type: 'upload', label: 'Imagem de perfil', body: 'Clique ou arraste a imagem para esta área para fazer o upload' },
        { type: 'data', label: 'Data de Nascimento' },
        { type: 'data', label: 'Data de contrato' }
    ]

    return (
            <Form className="form-register-user">
                {items.map((item, index) => {
                    console.log(item)
                    if (item.type === 'input') {
                        return (
                            <Form.Group className="div-register-user" key={index}>
                                <Form.Label bsPrefix="label-register-user">
                                    {item.label}
                                    <Form.Control
                                    placeholder={item.placeholder} 
                                    />
                                </Form.Label>
                            </Form.Group>
                        )
                    } else return null
                })}
            </Form>
    )
}
export default FormRegisterUser