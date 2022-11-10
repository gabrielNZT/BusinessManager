import { useSelector } from "react-redux";
import { BsSearch } from 'react-icons/bs'
import InputSearchField from "../inputSearchField";

const column = { display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }
const row = { display: 'flex', flexDirection: 'row', justifyContent: 'center' }

function SearchFields(props) {
    const { defaultColumns, columns } = props
    const hideSearchFields = useSelector(state => state.list.hideSearchFields)

    return (
        !hideSearchFields &&
        (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '12vh' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh', width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                    {columns.map((item, index) => {
                        const props = defaultColumns.find(element => element.key === item?.key);
                        return item?.key !== 'operation' ?
                            (<InputSearchField

                                item={{ key: props?.key, placeholder: 'campo de pesquisa', label: props?.title }}
                                index={index} />) : null
                    })}
                </div>
                <div style={{ ...row, marginLeft: '5vh' }}>
                    <div style={{ background: '#831e81', height: '50px', width: '50px', borderRadius: '15px', cursor: 'pointer' }}>
                        <div style={column}>
                            <div style={row}>
                                <BsSearch style={{ fontSize: '1.6rem', color: 'white' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
export default SearchFields