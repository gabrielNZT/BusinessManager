import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "./components"
import "./style/style.css"

const items = [
    { type: 'input', label: 'Nome', placeholder: 'Digite o nome', tag: 'name' },
    { type: 'input', label: 'Nome de Usuário', placeholder: 'Digite o nome de usuário', tag: 'username' },
    { type: 'input', label: 'Email', placeholder: 'Digite o email', tag: 'email' },
    { type: 'input', label: 'Telefone', placeholder: 'Digite o telefone', tag: 'phone' },
    { type: 'input', label: 'CPF', placeholder: 'Digite o CPF', tag: 'cpf' },
    { type: 'select', label: 'Permissão', placeholder: 'Escolha a permissão', tag: 'permission' },
    { type: 'switch', label: 'Ativo?', tag: 'isEnable' },
    { type: 'password', label: 'Senha', placeholder: 'Digite a senha', tag: 'password' },
    { type: 'password', label: 'Confirmar senha', placeholder: 'Confirme a senha', tag: 'repeatPassword' },
    { type: 'upload', label: 'Imagem de perfil', body: 'Clique ou arraste a imagem para esta área para fazer o upload' },
    { type: 'data', label: 'Data de Nascimento', tag: 'birthDate' },
    { type: 'data', label: 'Data de contrato', tag: 'contractDate' }
]

function UserPage() {
    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <HeaderRegisterForm title='Novo Usuário' path={"../home"}/>
            <FormRegisterUser items={items} />
        </LayoutHome>
    )
}
export default UserPage