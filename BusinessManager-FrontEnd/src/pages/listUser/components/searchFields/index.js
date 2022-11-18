import { useSelector } from "react-redux";
import { BsSearch } from 'react-icons/bs'
import InputSearchField from "../inputSearchField";
import { useState } from "react";

const column = { display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }
const row = { display: 'flex', flexDirection: 'row', justifyContent: 'center' }

function SearchFields(props) {
    const { defaultColumns, columns, tableParams } = props
    const hideSearchFields = useSelector(state => state.list.hideSearchFields)
    const [data, setData] = useState()

    const onFilter = () => console.log({ ...tableParams, filter: data });

    return (
        !hideSearchFields &&
        (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '12vh' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh', width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                    {columns.map((item, index) => {
                        const props = defaultColumns.find(element => element.key === item?.key);
                        return item?.key !== 'operation' ?
                            (<InputSearchField
                                data={data} setData={setData}
                                item={{ key: props?.key, placeholder: 'campo de pesquisa', label: props?.title }}
                                index={index} />) : null
                    })}
                </div>
                <div style={{ ...row, marginLeft: '5vh' }}>
                    <div style={{ background: '#831e81', height: '50px', width: '50px', borderRadius: '15px', cursor: 'pointer' }}>
                        <div style={column}>
                            <div style={row}>
                                <BsSearch style={{ fontSize: '1.6rem', color: 'white' }} onClick={onFilter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
export default SearchFields