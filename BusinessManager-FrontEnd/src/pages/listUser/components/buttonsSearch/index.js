import { TbZoomCancel } from "react-icons/tb"
import { useDispatch } from "react-redux"
import { ClickSearchField } from "../../reducer/actions"
import PopOver from "../popover"

function ButtonsSearch(props) {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(ClickSearchField())
    return (
        <div style={{ display: 'flex', gap: '5vh' }}>
            <TbZoomCancel
                onClick={() => handleClick}
                style={{ fontSize: '2.2rem', color: '#831e81', cursor: 'pointer' }} />
            <PopOver
                defaultColumns={props.defaultColumns}
                checkBoxItems={props.checkBoxItems}
                setColumns={props.setColumns}
                columns={props.columns} />
        </div>
    )
}
export default ButtonsSearch