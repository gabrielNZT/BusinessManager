import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutHome from "../../global/components/layout";
import { GetListUser } from "../../services/request";
import { ButtonsActions, ContainerList } from "./components";
import DateText from "./components/dateText";
import { FetchUserList } from "./reducer/actions";
import './style/style.css'

const width = '200px'
const INITIAL_COLUMNS = [
    { key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left', width: width },
    { key: 'username', title: 'Nome de usuário', dataIndex: 'username', width: width },
    { key: 'email', title: 'Email', dataIndex: 'email', width: "250px" },
    { key: 'phone', title: 'Telefone', dataIndex: 'phone', width: width },
    { key: 'cpf', title: 'CPF', dataIndex: 'cpf', width: width },
    { key: 'birthDate', title: 'Data de Nascimento', dataIndex: 'birthDate', width: width, render: (_, record) => <DateText date={record.birthDate} /> },
    { key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: width },
    { key: 'permission', title: 'Permissão', dataIndex: 'permission', width: width },
    { key: 'contractDate', title: 'Data de Contrato', dataIndex: 'contractDate', width: width, render: (_, record) => <DateText date={record.contractDate} /> },
    { key: 'operation', title: 'Ações', fixed: 'right', width: "150px", render: (_, record) => <ButtonsActions record={record} path={'../user/edit'} /> }
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