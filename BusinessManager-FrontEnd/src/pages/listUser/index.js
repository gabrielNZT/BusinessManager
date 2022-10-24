import LayoutHome from "../../global/components/layout";
import { HeaderList, TableUser, ButtonsSearch } from "./components";
import './style/style.css'

function ListUser() {
    return (
        <LayoutHome currentPage={['3']} breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
                <HeaderList />
                <ButtonsSearch />
                <TableUser />
            </div>
        </LayoutHome>
    )
}
export default ListUser