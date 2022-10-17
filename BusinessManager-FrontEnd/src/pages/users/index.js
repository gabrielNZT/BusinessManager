import HeaderArrow from "../../global/components/headerBackToLogin"
import LayoutHome from "../../global/components/layout"
import FormRegisterUser from "./components/form"
import "./style/style.css"

const items = [
    { type: 'input', label: 'Nome', placeholder: 'Digite o nome', tag: 'name' },
    { type: 'input', label: 'Nome de Usuário', placeholder: 'Digite o nome de usuário' , tag: 'username' },
    { type: 'input', label: 'Email', placeholder: 'Digite o email', tag: 'email' },
    { type: 'input', label: 'Telefone', placeholder: 'Digite o telefone', tag: 'phone' },
    { type: 'input', label: 'CPF', placeholder: 'Digite o CPF', tag: 'cpf' },
    { type: 'select', label: 'Permissão', placeholder: 'Escolha a permissão', tag: 'permission' },
    { type: 'switch', label: 'Ativo?', },
    { type: 'input', label: 'Senha', mask: 'password', placeholder: 'Digite a senha', tag: 'password' },
    { type: 'input', label: 'Confirmar senha', mask: 'password', placeholder: 'Confirme a senha', tag: 'repeatPassword' },
    { type: 'upload', label: 'Imagem de perfil', body: 'Clique ou arraste a imagem para esta área para fazer o upload' },
    { type: 'data', label: 'Data de Nascimento' },
    { type: 'data', label: 'Data de contrato' }
]

function UserPage() {
    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <HeaderArrow
                path={"../home"}
                customStyle={'div-user-form-header'}
                margin={'1%'} size={'24px'}
                bold={'bold'}
                title='Novo Usuário' />
            <FormRegisterUser items={items}/>
        </LayoutHome>
    )
}
export default UserPage