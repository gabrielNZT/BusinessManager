import { TbZoomCancel } from "react-icons/tb"
import PopOver from "../popover"

function ButtonsSearch(props) {
        return (
            <div style={{ display: 'flex', gap: '5vh' }}>
                <TbZoomCancel style={{ fontSize: '2.2rem', color: '#831e81'}} />
                <PopOver columns={props.columns} />
            </div>
        )
    }
export default ButtonsSearch