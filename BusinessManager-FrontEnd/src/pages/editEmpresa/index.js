
import { useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import { FormRegisterUser, HeaderRegisterForm, LayoutHome } from "../../global/components"

const DEFAULT_ITEMS = [
    { type: 'input', tag: 'name', label: 'Nome', placeholder: 'Digite o nome da empresa', disabled: true },
    { type: 'input', tag: 'cnpj', label: 'CNPJ', placeholder: 'Digite o cnpj da empresa' },
    { type: 'input', tag: 'email', label: 'Email', placeholder: 'Digite o email associado a empresa' },
    { type: 'input', tag: 'phone', label: 'Telefone', placeholder: 'Digite o telefone da empresa' },
    { type: 'input', tag: 'fantasyName', label: 'Nome Fantasia', placeholder: 'Digite o nome fantasia da empresa' },
    { type: 'input', tag: 'corporateName', label: 'Razão Social', placeholder: 'Digite a razão social da empresa' },
    { type: 'upload', tag: 'companyPhoto', label: 'Logo', body: 'clique ou arraste a imagem para esta área para fazer o upload' }
]

function EditEmpresa() {
    const company = JSON.parse(localStorage.getItem('company'))
    const [loading, setLoading] = useState(false)
    const [src, setSrc] = useState()
    const [formData, setFormData] = useState({
        id: company.id,
        passwordLocked: false,
        name: company.name
    })

    const handleSubmit = () => { }
    return (
        <LayoutHome currentPage={['4']} breadCrumb={[{ name: 'Empresa', link: '/editCompany' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit, loading: loading, setLoading: setLoading }}>
                <HeaderRegisterForm
                    formData={formData}
                    title={'Empresa'}
                    path={'../home'} />
                <FormRegisterUser
                    rowGap={'10vh'}
                    src={src}
                    setFormData={setFormData}
                    formData={formData}
                    items={DEFAULT_ITEMS} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default EditEmpresa