import { useState } from "react"
import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../../global/components"
import ClickSubmit from "../../contexts/clickSubmit"
import "./style/style.css"
import { toast } from "react-toastify"
import { RegisterUser } from "../../services/request"

const items = [
    { type: 'input', label: 'Nome', placeholder: 'Digite o nome', tag: 'name' },
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
    { type: 'switch', label: 'Ativo?', tag: 'isEnable' },
    { type: 'password', label: 'Senha', placeholder: 'Digite a senha', tag: 'password' },
    { type: 'password', label: 'Confirmar senha', placeholder: 'Confirme a senha', tag: 'repeatPassword' },
    {
        type: 'upload', label: 'Imagem de perfil', body: 'Clique ou arraste a imagem para esta área para fazer o upload',
        shape: 'round', tag: 'userPhoto'
    },
    { type: 'data', label: 'Data de Nascimento', tag: 'birthDate' },
    { type: 'data', label: 'Data de contrato', tag: 'contractDate' }
]

function UserPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        isEnabled: true
    });

    const handleSubmit = (data) => {
        if (data.password !== data.repeatPassword) {
            toast.error('Senha de confirmação não corresponde com a senha!')
            setFormData({ ...formData, repeatPassword: '' })
        }
        else {
            RegisterUser({ ...data, company: JSON.parse((localStorage.getItem('company'))).id })
                .then(() => {
                    toast.success("Usuário salvo!")
                    setLoading(false)
                })
                .catch((request) => {
                    toast.error(request.response.data.message);
                    setLoading(false)
                })
        }
    }

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }, { name: 'Novo Usuário', link: '/user/register' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit, loading: loading, setLoading: setLoading }}>
                <HeaderRegisterForm
                    formData={formData}
                    title='Novo Usuário'
                    path={"../user"} />
                <FormRegisterUser
                    formData={formData}
                    setFormData={setFormData}
                    rowGap={'5vh'}
                    items={items} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default UserPage