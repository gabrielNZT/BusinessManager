import { Button } from "antd";
import { AiOutlineCheck } from 'react-icons/ai'

function ButtonSubmit() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '16%' }}>
            <Button type="primary" icon={<AiOutlineCheck style={{ fontSize: '22px', position: 'relative', right: '16px' }} />}

                size={'large'}
                className='button-submit-register-user'>
                Salvar
            </Button>
        </div>
    )
}
export default ButtonSubmit