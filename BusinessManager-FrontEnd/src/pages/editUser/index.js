import { useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import './style/style.css'

const nameUser = 'Gabriel Nunes'
const items = [
    { type: 'input', label: 'Nome', value: nameUser, disabled: true },
    { type: 'input', label: 'Nome de Usuário', placeholder: 'Digite o nome de usuário', tag: 'username' },
    { type: 'input', label: 'Email', placeholder: 'Digite o email', tag: 'email' },
    { type: 'input', label: 'Telefone', placeholder: 'Digite o telefone', tag: 'phone' },
    { type: 'input', label: 'CPF', placeholder: 'Digite o CPF', tag: 'cpf' },
    {
        type: 'select', label: 'Permissão', placeholder: 'Escolha a permissão', tag: 'permission', elements: [
            { role: 'Administrador' },
            { role: 'Gerente' },
            { role: 'Operador' }
        ]
    },
    { type: 'switchs', items: [{ label: 'Ativo?', tag: 'isEnable' }, { label: 'Altera Senha', tag: 'passwordLocked' }] },
    { type: 'password', label: 'Senha', placeholder: 'Digite a senha', tag: 'password' },
    { type: 'password', label: 'Confirmar senha', placeholder: 'Confirme a senha', tag: 'repeatPassword' },
    { type: 'upload', label: 'Imagem de perfil', body: 'Clique ou arraste a imagem para esta área para fazer o upload' },
    { type: 'data', label: 'Data de Nascimento', tag: 'birthDate' },
    { type: 'data', label: 'Data de contrato', tag: 'contractDate' }
]


function EditUser() {
    const [formData, setFormData] = useState({
        name: nameUser
    })
    const handleSubmit = (data) => console.log(data)

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }, { name: nameUser, link: '/user/edit' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit }}>
                <HeaderRegisterForm
                    formData={formData}
                    title={nameUser}
                    path={'../user'} />
                <FormRegisterUser
                rowGap={'5vh'}
                    setFormData={setFormData}
                    formData={formData}
                    items={items} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default EditUser