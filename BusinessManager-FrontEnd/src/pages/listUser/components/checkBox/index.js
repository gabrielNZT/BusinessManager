import { Checkbox } from 'antd';
import React from 'react';

function CheckBoxGroup(props) {
    const { defaultColumns } = props
    const handleChange = (event) => props.setColumns(defaultColumns.filter(item => event.find(element => item.key === element)))

    return (
        <Checkbox.Group
            onChange={(event) => handleChange(event)}
            style={{ display: 'flex', flexDirection: 'column' }}>
            {props.checkBoxItems.map((item, index) => item.key !== 'operation' ?
                <Checkbox defaultChecked value={item.key} key={index}>{item.title}</Checkbox> : null)}
        </Checkbox.Group>
    )
}
export default CheckBoxGroup