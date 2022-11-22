import { useSelector } from "react-redux";
import { BsSearch } from 'react-icons/bs'
import InputSearchField from "../inputSearchField";
import { useState } from "react";
import { SelectANT } from "../../../../global/components";

const column = { display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }
const row = { display: 'flex', flexDirection: 'row', justifyContent: 'center' }

function SearchFields(props) {
    const { defaultColumns, columns, tableParams, setTableParams } = props
    const hideSearchFields = useSelector(state => state.list.hideSearchFields)
    const [data, setData] = useState()

    const onFilter = () => setTableParams({ ...tableParams, filter: data });
    const onChangeSelect = ({ value, key: name }) => setData({ ...data, [name]: { field: name, value: value } })

    return (
        !hideSearchFields &&
        (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '12vh' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh', width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                        {columns.map((item, index) => {
                            const props = defaultColumns.find(element => element.key === item?.key);
                            switch (props.type) {
                                case 'INPUT':
                                    return <InputSearchField
                                        data={data} setData={setData}
                                        item={{ key: props.key, placeholder: props.placeholder, label: props.title }}
                                        index={index}
                                    />
                                case 'SELECT':
                                    return <SelectANT
                                        item={{ key: props.key, label: props.title, elements: props.elements }}
                                        placeholder={props.placeholder}
                                        onChange={onChangeSelect}
                                        index={index}
                                    />
                                default:
                                    return null
                            }
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