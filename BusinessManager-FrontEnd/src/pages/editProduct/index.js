import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import { useEffect, useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import { useLocation } from "react-router-dom"
import { GetProductImage, UpdateProduct } from "../../services/request"
import { binToBase64 } from "../../global/utils"

const CODE_POS = 1
const NAME_POS = 0
const DEFAULT_ITEMS = [
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
    { type: 'switch', label: 'Ativo?', tag: 'enabled' },
    { type: 'upload', label: 'Imagem', body: 'Clique ou arraste a imagem para esta área para fazer o upload' }
]


function EditProduct() {
    const { state } = useLocation()
    const { key: id, ...rest } = state
    const [src, setSrc] = useState()
    const [formData, setFormData] = useState({
        id: id,
        ...rest
    })
    DEFAULT_ITEMS[CODE_POS] = { ...DEFAULT_ITEMS[CODE_POS], value: state?.code}
    DEFAULT_ITEMS[NAME_POS] = { ...DEFAULT_ITEMS[NAME_POS], value: state?.name }

    const handleRequest = async (id) => {
        const responseData = await GetProductImage(id).then(response => response.data)
        return responseData?.imageBytes === undefined ? null : (responseData.contentType + binToBase64(responseData?.imageBytes))
    }

    const handleSubmit = (data) => UpdateProduct(data).then(response => console.log(response))

    useEffect(() => {
        handleRequest(state.key).then(response => setSrc(response))
    }, [state.key]);

    console.log(src)
    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/product' }, { name: state?.name, link: '/product/edit' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit }}>
                <HeaderRegisterForm
                    formData={formData}
                    title={state?.name}
                    path={'../product'} />
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
export default EditProduct