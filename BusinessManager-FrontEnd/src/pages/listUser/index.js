import { useState } from "react";
import LayoutHome from "../../global/components/layout";
import { DATA_USER } from "../../services/mock";
import { ButtonsActions, ContainerList } from "./components";
import './style/style.css'

const width = '200px'
const INITIAL_COLUMNS = [
    { key: 'name', title: 'Nome', dataIndex: 'name', fixed: 'left' ,width: width },
    { key: 'username', title: 'Nome de usuário', dataIndex: 'username', width: width  },
    { key: 'email', title: 'Email', dataIndex: 'email', width: width  },
    { key: 'phone', title: 'Telefone', dataIndex: 'phone', width: width  },
    { key: 'cpf', title: 'CPF', dataIndex: 'cpf', width: width  },
    { key: 'birthDate', title: 'Data de Nascimento', dataIndex: 'birthDate', width: width  },
    { key: 'enabled', title: 'Ativo', dataIndex: 'enabled', width: width  },
    { key: 'permission', title: 'Permissão', dataIndex: 'permission', width: width  },
    { key: 'contractDate', title: 'Data de Contrato', dataIndex: 'contractDate', width: width  },
    { key: 'operation', title: 'Ações', fixed: 'right', width: 100, render: (_, record) => <ButtonsActions record={record} path={'../user/edit'} /> }
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
                data={DATA_USER}
                setColumns={setColumns} />
        </LayoutHome>
    )
}
export default ListUser