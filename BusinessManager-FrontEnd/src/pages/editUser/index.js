import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import './style/style.css'


function EditUser() {
    const nameUser = 'GABRIEL'
    const items = [
        { type: 'input', label: 'Nome', value: nameUser,disabled: true },
        { type: 'input', label: 'Nome de Usuário', placeholder: 'Digite o nome de usuário', tag: 'username' },
        { type: 'input', label: 'Email', placeholder: 'Digite o email', tag: 'email' },
        { type: 'input', label: 'Telefone', placeholder: 'Digite o telefone', tag: 'phone' },
        { type: 'input', label: 'CPF', placeholder: 'Digite o CPF', tag: 'cpf' },
        { type: 'select', label: 'Permissão', placeholder: 'Escolha a permissão', tag: 'permission' },
        { type: 'switchs', items: [{label: 'Ativo?', tag: 'isEnable'}, {label: 'Altera Senha', tag: 'passwordLocked'} ] },
        { type: 'password', label: 'Senha', placeholder: 'Digite a senha', tag: 'password' },
        { type: 'password', label: 'Confirmar senha', placeholder: 'Confirme a senha', tag: 'repeatPassword' },
        { type: 'upload', label: 'Imagem de perfil', body: 'Clique ou arraste a imagem para esta área para fazer o upload' },
        { type: 'data', label: 'Data de Nascimento', tag: 'birthDate' },
        { type: 'data', label: 'Data de contrato', tag: 'contractDate' }
    ]

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }, { name: 'Teste', link: '/user/edit' }]}>
            <HeaderRegisterForm title={nameUser} path={'../user'} />
            <FormRegisterUser items={items} />
        </LayoutHome>
    )
}
export default EditUser