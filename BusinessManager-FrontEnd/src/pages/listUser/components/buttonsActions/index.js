import { BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import {AiFillWarning} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import { Popconfirm } from 'antd'

function ButtonsActions(props) {
    let navigate = useNavigate()
    const handleNavigate = () => navigate(props.path, { replace: true, state: { ...props.record } })
    const style = {
        fontSize: '1.2rem',
        cursor: 'pointer'
    }

    return (
        <div style={{ display: 'flex', gap: '2vh' }}>
            <FiEdit style={{ ...style, color: '#4ab3b4' }} onClick={() => handleNavigate()} />
            <Popconfirm
            icon={<AiFillWarning style={{position: 'absolute', top: '8px', fontSize: '16px', color: ' #FF7875'}} />}
            okButtonProps={{ danger: true}}
            okText="sim"
            cancelText="não" 
            title="Continuar a remoção?">
                <BsTrash style={{ ...style, color: '#e2395a' }} />
            </Popconfirm>
        </div>
    )
}
export default ButtonsActions