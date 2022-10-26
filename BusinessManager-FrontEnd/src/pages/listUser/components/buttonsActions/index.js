import { BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function ButtonsActions(props) {
    let navigate = useNavigate()
    const handleNavigate = () => navigate(props.path, { replace: true })
    const style = {
        fontSize: '1.2rem',
        cursor: 'pointer'
    }

    return (
        <div style={{ display: 'flex', gap: '2vh' }}>
            <FiEdit style={{ ...style, color: '#4ab3b4' }} onClick={() => handleNavigate()} />
            <BsTrash style={{ ...style, color: '#e2395a' }} />
        </div>
    )
}
export default ButtonsActions