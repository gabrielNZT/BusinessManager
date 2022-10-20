import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import { useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"

const items = [
    { type: 'input', tag: 'name', placeholder: 'Digite o nome do produto', label: 'Nome' },
    { type: 'input', label: 'Código', tag: 'code', value: '00001', disabled: true },
    { type: 'input', label: 'Preço', tag: 'price', placeholder: 'Digite o preço do produto', value: 0 },
    {
        type: 'select', label: 'Unidade', tag: 'unity', placeholder: 'Escolha a unidade', elements: [
            { role: 'UN' },
        ]
    },
    { type: 'input', label: 'Quantidade em Estoque', placeholder: 'Digite a quantidade em estoque', tag: 'stock' },
    { type: 'input', label: 'Estoque Mínimo', tag: 'minStock', placeholder: 'Digite a quantidade de estoque mínimo' },
    { type: 'switch', label: 'Ativo?', tag: 'isEnabled' },
    { type: 'upload', label: 'Imagem', body: 'Clique ou arraste a imagem para esta área para fazer o upload' }
]

function RegisterProduct() {
    const [formData, setFormData] = useState({})
    const handleSubmit = (data) => console.log(data)

    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/product' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit }}>
                <HeaderRegisterForm
                    formData={formData}
                    title='Novo Produto'
                    path={'../home'} />
                <FormRegisterUser
                    formData={formData}
                    setFormData={setFormData}
                    rowGap={'10vh'}
                    items={items} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default RegisterProduct