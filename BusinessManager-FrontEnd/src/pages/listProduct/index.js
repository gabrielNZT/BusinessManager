import { useState } from "react"
import LayoutHome from "../../global/components/layout"
import { ButtonsActions, ContainerList } from "../listUser/components"

const INITIAL_COLUMNS = [
    { key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left', width: 100 },
    { key: 'code', title: 'Código', dataIndex: 'code', width: 100 },
    { key: 'price', title: 'Preço', dataIndex: 'price', width: 100 },
    { key: 'stock', title: 'Qtd. estoque', dataIndex: 'stock', width: 100 },
    { key: 'minStock', title: 'Estoque Mínimo', dataIndex: 'minStock', width: 100 },
    { key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: 100 },
    { key: 'operation', title: 'Ações', fixed: 'right', width: 100, render: () => <ButtonsActions /> }
]

const config = {
    buttonTitle: 'NOVO PRODUTO',
    path: '../product/register',
    title: 'Produtos'
}

function ListProduct() {
    const [columns, setColumns] = useState(INITIAL_COLUMNS)
    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Usuários', link: '/user' }]} >
            <ContainerList
                defaultColumns={INITIAL_COLUMNS}
                checkBoxItems={INITIAL_COLUMNS}
                config={config}
                columns={columns}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListProduct