import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import { useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import { useLocation } from "react-router-dom"

function EditProduct() {
    const handleSubmit = (data) => console.log(data)
    const { state } = useLocation()
    const [formData, setFormData] = useState({
        name: state?.name
    })

    const items = [
        { type: 'input', tag: 'name', placeholder: 'Digite o nome do produto', value: state?.name, label: 'Nome' },
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

    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/product' }, { name: state?.name, link: '/user/edit' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit }}>
                <HeaderRegisterForm
                    formData={formData}
                    title={state?.name}
                    path={'../product'} />
                <FormRegisterUser
                    rowGap={'10vh'}
                    setFormData={setFormData}
                    formData={formData}
                    items={items} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default EditProduct