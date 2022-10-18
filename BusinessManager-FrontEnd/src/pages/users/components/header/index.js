import ButtonSubmit from '../buttonSubmit'
import HeaderArrow from "../../../../global/components/headerBackToLogin"

function HeaderRegisterForm() {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '80%' }}>
                <HeaderArrow
                    path={"../home"}
                    customStyle={'div-user-form-header'}
                    margin={'1%'} size={'24px'}
                    bold={'bold'}
                    title='Novo Usuário' />
            </div>
            <ButtonSubmit />
        </div>
    )
}
export default HeaderRegisterForm