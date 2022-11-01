import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


function SelectPermission(props) {
    const {formData, item} = props;
    
    const handleChange = (value) => props.handleSetData({...formData, [props.item.tag]: value})

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '31.6%'}}>
            <label> {item.label} </label>
            <Select
            size='large'
            defaultValue={formData[item.tag]}
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