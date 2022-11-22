import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutHome from "../../global/components/layout";
import { GetListUser, UpdateUser } from "../../services/request";
import { SwitchEnableUser } from "../registerUser/components";
import { ButtonsActions, ContainerList } from "./components";
import DateText from "./components/dateText";
import { DeleteUserFromList, FetchUserList } from "./reducer/actions";
import './style/style.css'

const SWITCH_ELEMENT_POS = 6
const width = '200px'
const INITIAL_COLUMNS = [
    {
        key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left', width: width, defaultSortOrder: 'descend',
        type: 'INPUT', placeholder: 'Digite o nome a ser encontrado', sorter: () => { }
    },
    {
        key: 'username', title: 'Nome de usuário', dataIndex: 'username', width: width, type: 'INPUT',
        placeholder: 'Digite o nome de usuário a ser encontrado'
    },
    {
        key: 'email', title: 'Email', dataIndex: 'email', width: "250px", type: 'INPUT',
        placeholder: 'Digite o email a ser encontrado'
    },
    {
        key: 'phone', title: 'Telefone', dataIndex: 'phone', width: width, type: 'INPUT',
        placeholder: 'digite o telefone a ser encontrado'
    },
    { key: 'cpf', title: 'CPF', dataIndex: 'cpf', width: width, type: 'INPUT', placeholder: 'Digite o cpf a ser encontrado' },
    {
        key: 'birthDate', title: 'Data de Nascimento', dataIndex: 'birthDate', width: width, type: 'DATE_PICKER',
        placeholder: 'Selecione a data de nascimento a ser encontrado', render: (_, record) => <DateText date={record.birthDate} />
    },
    {
        key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: width, type: 'SELECT',
        placeholder: 'Selecione o estado da conta', elements: ['Ativo', 'Desativado', 'Todos']
    },
    {
        key: 'permission', title: 'Permissão', dataIndex: 'permission', width: width, type: 'SELECT',
        placeholder: 'Selecione a permissão', elements: ['Administrador', 'Gerente', 'Operador']
    },
    {
        key: 'contractDate', title: 'Data de Contrato', dataIndex: 'contractDate', width: width, type: 'DATE_PICKER',
        placeholder: 'Selecione a data de contrato', render: (_, record) => <DateText date={record.contractDate} />
    },
    { key: 'operation', title: 'Ações', fixed: 'right', width: "150px", render: (_, record) => <ButtonsActions record={record} path={'../user/edit'} listType={'user'} /> }
]

const config = {
    buttonTitle: 'NOVO USUÁRIO',
    path: '../user/register',
    title: 'Usuários'
}

function ListUser() {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.list.userList)
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10
        },
        filter: null,
        sorter: {
            order: 'ascend',
            filter: 'name'
        }
    })
    const { filter } = tableParams
    console.log(filter?.enabled)
    const [columns, setColumns] = useState(INITIAL_COLUMNS)
    const handleEnabledUser = (data) => {
        UpdateUser(data).then(() => {
            console.log(filter, data)
            if ((data.enabled && filter?.enabled?.value === 'Desativado') || (!data.enabled && filter?.enabled?.value === 'Ativado')) {
                console.log(`deletar usuário ${data.key}`)
                dispatch(DeleteUserFromList(data.key))
            }
        })
    }

    INITIAL_COLUMNS[SWITCH_ELEMENT_POS] = {
        ...INITIAL_COLUMNS[SWITCH_ELEMENT_POS], render: (_, record) =>
            <SwitchEnableUser defaultValue={record.enabled} formData={record} name={'enabled'} handleSetData={handleEnabledUser} />
    }

    const fetchData = (pagination, filters, sorter) => {
        GetListUser(pagination ? pagination : tableParams.pagination, sorter, tableParams.filter).then(response => {
            setTableParams({
                ...tableParams,
                pagination: {
                    ...pagination ? pagination : tableParams.pagination,
                    total: response.data.count
                },
                sorter: sorter ? sorter : tableParams.sorter
            })
            dispatch(FetchUserList(response.data))
        })
    }
    const handleTableChange = (pagination, filters, sorter) => fetchData(pagination, filters, sorter);

    useEffect(() => {
        fetchData(tableParams.pagination, tableParams.filter, tableParams.sorter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableParams.filter]);

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <ContainerList
                tableParams={tableParams} setTableParams={setTableParams}
                handleTableChange={handleTableChange}
                defaultColumns={INITIAL_COLUMNS}
                checkBoxItems={INITIAL_COLUMNS}
                config={config} columns={columns}
                data={userList?.users}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListUser