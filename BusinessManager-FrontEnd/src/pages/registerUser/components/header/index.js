import ButtonSubmit from '../buttonSubmit'
import HeaderArrow from "../../../../global/components/headerBackToLogin"

function HeaderRegisterForm(props) {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '80%' }}>
                <HeaderArrow
                    path={props.path}
                    customStyle={'div-user-form-header'}
                    margin={'1%'} size={'24px'}
                    bold={'bold'}
                    title={props.title} />
            </div>
            <ButtonSubmit formData={props.formData}/>
        </div>
    )
}
export default HeaderRegisterForm