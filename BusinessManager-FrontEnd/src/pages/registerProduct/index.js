import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import { GetProductCode, SaveProduct } from "../../services/request"
import { useEffect, useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import { toast } from "react-toastify"
import { codeMask } from "../../global/utils"

const INPUT_CODE_POS = 1
const DEFAULT_ITEMS = [
    { type: 'input', tag: 'name', placeholder: 'Digite o nome do produto', label: 'Nome' },
    { type: 'input', label: 'Código', tag: 'code', disabled: true },
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
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        isEnabled: true
    })

    useEffect(() => {
        if (formData.code === undefined) {
            GetProductCode(JSON.parse(localStorage.getItem('company'))?.id).then((response) => {
                const code = response.data.code
                setFormData({ ...formData, code: codeMask(code) })
                DEFAULT_ITEMS[INPUT_CODE_POS] = { ...DEFAULT_ITEMS[INPUT_CODE_POS], value: codeMask(code) }
            })
        }
    }, [formData]);

    const handleSubmit = (data) => {
        SaveProduct({ ...data, company: JSON.parse(localStorage.getItem('company')).id })
            .then(() => {
                toast.success("Produto salvo!")
                setLoading(false)
            })
            .catch(request => toast.error(request.response.data.message));
    }

    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/product' }, { name: 'Novo Produto', link: '/product/edit' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit, loading: loading, setLoading: setLoading }}>
                <HeaderRegisterForm
                    formData={formData}
                    title='Novo Produto'
                    path={'../user'} />
                <FormRegisterUser
                    formData={formData}
                    setFormData={setFormData}
                    rowGap={'10vh'}
                    items={DEFAULT_ITEMS} />
            </ClickSubmit.Provider>
        </LayoutHome>
    )
}
export default RegisterProduct