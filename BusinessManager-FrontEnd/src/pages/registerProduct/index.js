import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import { SaveProduct } from "../../services/request"
import { useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import { toast } from "react-toastify"

const productCode = '0001'
const items = [
    { type: 'input', tag: 'name', placeholder: 'Digite o nome do produto', label: 'Nome' },
    { type: 'input', label: 'Código', tag: 'code', value: productCode, disabled: true },
    { type: 'input', label: 'Preço', tag: 'price', placeholder: 'Digite o preço do produto', value: 0 },
    {
        type: 'selectUnity', label: 'Unidade', tag: 'unity', placeholder: 'Escolha a unidade', elements: ['UN']
    },
    { type: 'input', label: 'Quantidade em Estoque', placeholder: 'Digite a quantidade em estoque', tag: 'stock' },
    { type: 'input', label: 'Estoque Mínimo', tag: 'minStock', placeholder: 'Digite a quantidade de estoque mínimo' },
    { type: 'switch', label: 'Ativo?', tag: 'isEnabled' },
    { type: 'upload', label: 'Imagem', body: 'Clique ou arraste a imagem para esta área para fazer o upload', tag: 'productPhoto' }
]

function RegisterProduct() {
    const [formData, setFormData] = useState({
        isEnabled: true,
        code: productCode
    })
    const handleSubmit = (data) =>
        SaveProduct({ ...data, company: JSON.parse(localStorage.getItem('company')).id })
            .then(() => localStorage.setItem('product', JSON.stringify({
                code: JSON.parse(localStorage.getItem('product'))?.code ? JSON.parse(localStorage.getItem('product'))?.code : 1
            })))
            .catch(request => toast.error(request.response.data.message));


    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/product' }, { name: 'Novo Produto', link: '/product/edit'}]}>
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