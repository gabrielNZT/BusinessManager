import { useState } from "react";
import LayoutHome from "../../global/components/layout";
import { HeaderList, TableUser, ButtonsSearch } from "./components";
import './style/style.css'

const INITIAL_COLUMNS = [
    {tag: 'name', name: 'Nome'},
    {tag: 'username', name: 'Nome de usuário'},
    {tag: 'email', name: 'Email'},
    {tag: 'phone', name: 'Telefone'},
    {tag: 'cpf', name: 'CPF'},
    {tag: 'birthDate', name: 'Data de Nascimento'},
    {tag: 'enabled', name: 'Ativo'},
    {tag: 'permission', name: 'Permissão'},
    {tag: 'contractDate', name: 'Data de Contrato'}
]

function ListUser() {
    const [columns, setColumns] = useState(INITIAL_COLUMNS)
    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
                <HeaderList />
                <ButtonsSearch columns={columns}/>
                <TableUser />
            </div>
        </LayoutHome>
    )
}
export default ListUser