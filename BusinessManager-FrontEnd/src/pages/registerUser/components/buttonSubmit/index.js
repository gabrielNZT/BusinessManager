import { Button } from "antd";
import { useContext } from "react";
import { AiOutlineCheck } from 'react-icons/ai'
import ClickSubmit from "../../../../contexts/clickSubmit";

function ButtonSubmit(props) {
    const { handleSubmit } = useContext(ClickSubmit)
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '16%' }}>
            <Button
                onClick={() => handleSubmit( props.formData )}
                type="primary"
                icon={<AiOutlineCheck style={{ fontSize: '22px', position: 'relative', right: '16px' }} />}
                size={'large'}
                className='button-submit-register-user'>
                Salvar
            </Button>
        </div>
    )
}
export default ButtonSubmit