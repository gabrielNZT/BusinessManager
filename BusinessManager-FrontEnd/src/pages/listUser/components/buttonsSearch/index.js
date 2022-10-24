import { AiTwotoneFilter } from "react-icons/ai";
import { TbZoomCancel } from "react-icons/tb"

function ButtonsSearch() {
        return (
            <div style={{ display: 'flex', gap: '5vh' }}>
                <TbZoomCancel style={{ fontSize: '2.2rem', color: '#831e81' }} />
                <AiTwotoneFilter style={{fontSize: '2.2rem', color: '#ccd2d7' }} />
            </div>
        )
    }
export default ButtonsSearch