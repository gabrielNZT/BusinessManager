import LayoutHome from "../../global/components/layout"
import { FormRegisterUser, HeaderRegisterForm } from "../registerUser/components"
import { useEffect, useState } from "react"
import ClickSubmit from "../../contexts/clickSubmit"
import { useLocation } from "react-router-dom"
import { GetProductImage, UpdateProduct } from "../../services/request"
import { binToBase64 } from "../../global/utils"
import { toast } from "react-toastify"

const DEFAULT_ITEMS = [
    { type: 'input', tag: 'name', placeholder: 'Digite o nome do produto', label: 'Nome' },
    { type: 'input', label: 'Código', tag: 'code', disabled: true },
    { type: 'input', label: 'Preço', tag: 'price', placeholder: 'Digite o preço do produto', value: 0 },
    { type: 'selectUnity', label: 'Unidade', tag: 'unity', placeholder: 'Escolha a unidade', elements: ['UN'] },
    { type: 'input', label: 'Quantidade em Estoque', placeholder: 'Digite a quantidade em estoque', tag: 'stock' },
    { type: 'input', label: 'Estoque Mínimo', tag: 'minStock', placeholder: 'Digite a quantidade de estoque mínimo' },
    { type: 'switch', label: 'Ativo?', tag: 'isEnabled' },
    { type: 'upload', label: 'Imagem', body: 'Clique ou arraste a imagem para esta área para fazer o upload', tag: 'productPhoto' }
]

function EditProduct() {
    const { state } = useLocation()
    const { key: id, ...rest } = state
    const [loading, setLoading] = useState(false)
    const [src, setSrc] = useState()
    const [formData, setFormData] = useState({
        id: id,
        ...rest
    })

    const handleRequest = async (id) => {
        const responseData = await GetProductImage(id).then(response => response.data)
        return responseData?.imageBytes === undefined ? null : (responseData.contentType + binToBase64(responseData?.imageBytes))
    }

    const handleSubmit = (data) => UpdateProduct(data).then(() => {
        toast.success("Atualizado com sucesso!")
        setLoading(false)
    })

    useEffect(() => {
        handleRequest(state.key).then(response => setSrc(response))
    }, [state.key]);

    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/product' }, { name: state?.name, link: '/product/edit' }]}>
            <ClickSubmit.Provider value={{ handleSubmit: handleSubmit, loading: loading, setLoading: setLoading }}>
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