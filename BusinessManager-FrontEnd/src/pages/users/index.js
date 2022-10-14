import HeaderArrow from "../../global/components/headerBackToLogin"
import LayoutHome from "../../global/components/layout"
import FormRegisterUser from "./components/form"
import "./style/style.css"

function UserPage() {
    return (
        <LayoutHome breadCrumb={[{ name: 'Usuários', link: '/user' }]}>
            <HeaderArrow margin={'1%'} size={'24px'} bold={'bold'} title='Novo Usuário'/>
            <FormRegisterUser/>
        </LayoutHome>
    )
}
export default UserPage