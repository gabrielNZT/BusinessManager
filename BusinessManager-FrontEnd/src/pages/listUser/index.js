import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListUser, UpdateUser } from "../../services/request";
import { ButtonsActions, ContainerList, SwitchEnableUser, DateText, LayoutHome } from "../../global/components";
import { FetchUserList, SetTableParams } from "../../store/listUser/actions";
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
        key: 'birthDate', title: 'Data de Nascimento', dataIndex: 'birthDate', width: width, type: 'DATE',
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
        key: 'contractDate', title: 'Data de Contrato', dataIndex: 'contractDate', width: width, type: 'DATE',
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
    const tableParams = useSelector(state => state.list.tableParams)

    const [columns, setColumns] = useState(INITIAL_COLUMNS)
    const handleEnabledUser = (data, params) => UpdateUser(data)
        .then(() => {
            const { pagination, sorter, filter } = params
            GetListUser(pagination, sorter, filter)
                .then(response => dispatch(FetchUserList(response.data)));
        });

    INITIAL_COLUMNS[SWITCH_ELEMENT_POS] = {
        ...INITIAL_COLUMNS[SWITCH_ELEMENT_POS], render: (_, record) =>
            <SwitchEnableUser defaultValue={record.enabled} formData={record} name={'enabled'} handleSetData={handleEnabledUser} />
    }

    const fetchData = (pagination, filters, sorter) => {
        GetListUser(pagination ? pagination : tableParams.pagination, sorter, tableParams.filter).then(response => {
            dispatch(SetTableParams({
                ...tableParams,
                pagination: {
                    ...pagination ? pagination : tableParams.pagination,
                    total: response.data.count
                },
                sorter: sorter ? sorter : tableParams.sorter
            }))
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
                tableParams={tableParams}
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