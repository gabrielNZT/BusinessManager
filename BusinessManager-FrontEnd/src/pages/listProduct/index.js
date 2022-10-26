import { useState } from "react"
import LayoutHome from "../../global/components/layout"
import { DATA_PRODUCT } from "../../services/mock"
import { ButtonsActions, ContainerList } from "../listUser/components"
import {StockNumber} from "../listUser/components"

const width = 100
const INITIAL_COLUMNS = [
    { key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left', width: width },
    { key: 'code', title: 'Código', dataIndex: 'code', width: width },
    { key: 'price', title: 'Preço', dataIndex: 'price', width: width },
    { key: 'stock', title: 'Qtd. estoque', dataIndex: 'stock', width: width, render: (_, record) => <StockNumber record={record} /> },
    { key: 'minStock', title: 'Estoque Mínimo', dataIndex: 'minStock', width: width},
    { key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: width },
    {
        key: 'operation', title: 'Ações', fixed: 'right', width: width, render: (_, record) =>
            <ButtonsActions record={record} path={'../product/edit'} />
    }
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
                data={DATA_PRODUCT}
                config={config}
                columns={columns}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListProduct