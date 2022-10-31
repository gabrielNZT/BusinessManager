import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


function SelectPermission(props) {
    const {formData} = props;
    
    const handleChange = (value) => props.handleSetData({...formData, [props.item.tag]: value})

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '31.6%'}}>
            <label> {props.item.label} </label>
            <Select
            size='large'
            placeholder={props.item.placeholder}
                style={{
                    width: "100%"
                }}
                onChange={handleChange}
            >
                {props.item.elements.map((item, index) => (<Option key={index} value={item.role}/>))}
            </Select>
        </div>
    )
}
export default SelectPermission