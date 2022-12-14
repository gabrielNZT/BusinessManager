import { Button } from "antd";
import { useContext } from "react";
import { AiOutlineCheck } from 'react-icons/ai'
import ClickSubmit from "../../../contexts/clickSubmit";

function ButtonSubmit(props) {
    const { handleSubmit, loading, setLoading } = useContext(ClickSubmit)
    const handleOnClick = () => {
        setLoading(true)
        handleSubmit(props.formData)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '16%' }}>
            <Button
                loading={loading}
                onClick={() => handleOnClick()}
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