import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import LayoutHome from "../../global/components/layout"
import { GetListProduct } from "../../services/request"
import { ButtonsActions, ContainerList } from "../listUser/components"
import { StockNumber } from "../listUser/components"
import { FetchProductList } from "../listUser/reducer/actions"
import { SwitchEnableUser } from "../registerUser/components"

const SWITCH_ELEMENT_POS = 6
const width = 100
const INITIAL_COLUMNS = [
    { key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left', width: width, sorter: () => {}, defaultSortOrder: 'descend' },
    { key: 'code', title: 'Código', dataIndex: 'code', width: width },
    { key: 'price', title: 'Preço', dataIndex: 'price', width: width },
    { key: 'stock', title: 'Qtd. estoque', dataIndex: 'stock', width: width, render: (_, record) => <StockNumber record={record} /> },
    { key: 'unity', title: 'Unidade', dataIndex: 'unity', width: width },
    { key: 'minStock', title: 'Estoque Mínimo', dataIndex: 'minStock', width: width },
    {
        key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: width
    },
    {
        key: 'operation', title: 'Ações', fixed: 'right', width: width, render: (_, record) =>
            <ButtonsActions record={record} path={'../product/edit'} listType={'product'} />
    }
]

const config = {
    buttonTitle: 'NOVO PRODUTO',
    path: '../product/register',
    title: 'Produtos'
}

function ListProduct() {
    const dispatch = useDispatch()

    const [columns, setColumns] = useState(INITIAL_COLUMNS)
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10
        },
        sorter: {
            order: 'ascend',
            filter: 'name'
        }
    })
    const productList = useSelector(state => state.list.productList)
    const handleEnabledUser = (data) => {
        console.log(data)
    }
    const fetchData = (pagination, filters, sorter) => {
        GetListProduct(pagination ? pagination : tableParams.pagination, sorter).then(response => {
            setTableParams({
                ...tableParams, pagination: {
                    ...pagination,
                    total: response.data.count
                },
                filter: filters,
                sorter: sorter
            })
            dispatch(FetchProductList(response.data))
        })
    }
    const handleTableChange = (pagination, filters, sorter) => {
        fetchData(pagination, filters, sorter)
    };
    INITIAL_COLUMNS[SWITCH_ELEMENT_POS] = {
        ...INITIAL_COLUMNS[SWITCH_ELEMENT_POS], render: (_, record) =>
            <SwitchEnableUser formData={record} handleSetData={handleEnabledUser} />
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <LayoutHome currentPage={['2']} breadCrumb={[{ name: 'Produto', link: '/user' }]}>
            <ContainerList
                tableParams={tableParams} setTableParams={setTableParams}
                defaultColumns={INITIAL_COLUMNS}
                checkBoxItems={INITIAL_COLUMNS}
                config={config}
                data={productList}
                columns={columns} handleTableChange={handleTableChange}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListProduct