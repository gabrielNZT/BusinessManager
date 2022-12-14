import { Checkbox } from 'antd';
import React, { useState } from 'react';

const arrayIsNull = (array) => !array.length ? true : false
const lastIndex = (array) => (array.length - 1)
const defaultValueHandle = (INITIAL_COLUMNS) => {
    const defaultValue = []
    INITIAL_COLUMNS.forEach(item => item.key !== 'operation' ? defaultValue.push(item.key) : null);
    return defaultValue
}

function CheckBoxGroup(props) {
    const { defaultColumns, columns, setColumns } = props
    const [value, setValue] = useState(() => defaultValueHandle(defaultColumns))

    const handleChange = (event) => {
        setValue(arrayIsNull(event) ? value : event)
        setColumns(arrayIsNull(event) ? columns : [...defaultColumns.filter(item => event.find(element => item.key === element)),
        defaultColumns[lastIndex(defaultColumns)]])
    }

    return (
        <Checkbox.Group
            value={value}
            defaultValue={defaultValueHandle(columns, defaultColumns)}
            onChange={(event) => handleChange(event)}
            style={{ display: 'flex', flexDirection: 'column' }}>
            {props.checkBoxItems.map((item, index) => item.key !== 'operation' ?
                <Checkbox defaultChecked value={item.key} key={index}>{item.title}</Checkbox> : null)}
        </Checkbox.Group>
    )
}
export default CheckBoxGroup