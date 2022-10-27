import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ClickSubmit from "../../contexts/clickSubmit"
import LayoutHome from "../../global/components/layout"
import { binToBase64 } from "../../global/utils"
import { GetImageUser } from "../../services/request"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import './style/style.css'

const NAME_POSITION = 0
const DEFAULT_ITEMS = [
    { type: 'input', label: 'Nome' },
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
    const handleSubmit = (data) => console.log(data)
    const { state } = useLocation();
    const [src, setSrc] = useState(null)
    const [formData, setFormData] = useState({
        name: state?.name
    })
    const handleRequest = async (id) => {
        const responseData = await GetImageUser(id).then(response => response.data)
        return responseData?.imageBytes === undefined ? null : (responseData.contentType + binToBase64(responseData?.imageBytes))
    }
    useEffect(() => {
        handleRequest(state.id).then(response => setSrc(response))
    }, [state.id]);

    console.log(src)
    DEFAULT_ITEMS[NAME_POSITION] = { ...DEFAULT_ITEMS[NAME_POSITION], value: state?.name, disabled: true }

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }, { name: state?.name, link: '/user/edit' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit }}>
                <HeaderRegisterForm
                    formData={formData}
                    title={state?.name}
                    path={'../user'} />
                <FormRegisterUser
                    rowGap={'5vh'}
                    setFormData={setFormData}
                    formData={formData}
                    src={src}
                    items={DEFAULT_ITEMS} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default EditUser