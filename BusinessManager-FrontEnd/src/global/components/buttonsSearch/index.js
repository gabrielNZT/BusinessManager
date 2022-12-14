import { TbZoomCancel } from "react-icons/tb"
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux"
import { ClickSearchField } from "../../../store/listUser/actions"
import PopOver from "../popover"

function ButtonsSearch(props) {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(ClickSearchField())

    const hideSearchFields = useSelector(state => state.list.hideSearchFields)
    const style = {
        fontSize: '2.2rem',
        color: '#831e81',
        cursor: 'pointer'
    }
    return (
        <div style={{ display: 'flex', gap: '5vh' }}>
            {hideSearchFields ?
                <BiSearch
                    onClick={() => handleClick()}
                    style={style} /> :
                <TbZoomCancel
                    onClick={() => handleClick()}
                    style={style} />}
            <PopOver
                defaultColumns={props.defaultColumns}
                checkBoxItems={props.checkBoxItems}
                setColumns={props.setColumns}
                columns={props.columns} />
        </div>
    )
}
export default ButtonsSearch