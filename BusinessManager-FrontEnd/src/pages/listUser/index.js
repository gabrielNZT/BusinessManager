import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutHome from "../../global/components/layout";
import { GetListUser } from "../../services/request";
import { SwitchEnableUser } from "../registerUser/components";
import { ButtonsActions, ContainerList } from "./components";
import DateText from "./components/dateText";
import { FetchUserList } from "./reducer/actions";
import './style/style.css'

const SWITCH_ELEMENT_POS = 6
const width = '200px'
const INITIAL_COLUMNS = [
    {
        key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left', width: width, defaultSortOrder: 'descend',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    { key: 'username', title: 'Nome de usuário', dataIndex: 'username', width: width },
    { key: 'email', title: 'Email', dataIndex: 'email', width: "250px" },
    { key: 'phone', title: 'Telefone', dataIndex: 'phone', width: width },
    { key: 'cpf', title: 'CPF', dataIndex: 'cpf', width: width },
    { key: 'birthDate', title: 'Data de Nascimento', dataIndex: 'birthDate', width: width, render: (_, record) => <DateText date={record.birthDate} /> },
    { key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: width },
    { key: 'permission', title: 'Permissão', dataIndex: 'permission', width: width },
    { key: 'contractDate', title: 'Data de Contrato', dataIndex: 'contractDate', width: width, render: (_, record) => <DateText date={record.contractDate} /> },
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
    const [columns, setColumns] = useState(INITIAL_COLUMNS)
    const handleEnabledUser = (data) => console.log(data)

    INITIAL_COLUMNS[SWITCH_ELEMENT_POS] = {
        ...INITIAL_COLUMNS[SWITCH_ELEMENT_POS], render: (_, record) =>
            <SwitchEnableUser formData={record} handleSetData={handleEnabledUser} />
    }

    useEffect(() => {
        GetListUser().then(response => dispatch(FetchUserList(response.data)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <ContainerList
                defaultColumns={INITIAL_COLUMNS}
                checkBoxItems={INITIAL_COLUMNS}
                config={config} columns={columns}
                data={userList}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListUser