import { BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

function ButtonsActions() {
    return (
        <div style={{ display: 'flex', gap: '2vh' }}>
            <FiEdit style={{fontSize: '1.2rem', color: '#4ab3b4'}} />
            <BsTrash style={{fontSize: '1.2rem', color: '#e2395a'}} />
        </div>
    )
}
export default ButtonsActions