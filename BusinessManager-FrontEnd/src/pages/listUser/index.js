import { useState } from "react";
import LayoutHome from "../../global/components/layout";
import { ButtonsActions, ContainerList } from "./components";
import './style/style.css'

const INITIAL_COLUMNS = [
    { key: 'name', title: 'Nome', dataIndex: 'name' },
    { key: 'username', title: 'Nome de usuário', dataIndex: 'username' },
    { key: 'email', title: 'Email', dataIndex: 'email' },
    { key: 'phone', title: 'Telefone', dataIndex: 'phone' },
    { key: 'cpf', title: 'CPF', dataIndex: 'cpf' },
    { key: 'birthDate', title: 'Data de Nascimento', dataIndex: 'birthDate' },
    { key: 'enabled', title: 'Ativo', dataIndex: 'enabled' },
    { key: 'permission', title: 'Permissão', dataIndex: 'permission' },
    { key: 'contractDate', title: 'Data de Contrato', dataIndex: 'contractDate' },
    { key: 'operation', title: 'Ações', fixed: 'right', width: 100, render: () => <ButtonsActions /> }
]

const config = {
    buttonTitle: 'Novo usuário',
    path: '../user/register',
    title: 'Usuários'
}


function ListUser() {
    const [columns, setColumns] = useState(INITIAL_COLUMNS)

    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <ContainerList
                defaultColumns={INITIAL_COLUMNS}
                checkBoxItems={INITIAL_COLUMNS}
                config={config} columns={columns}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListUser