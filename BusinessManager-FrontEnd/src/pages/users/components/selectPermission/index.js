import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


function SelectPermission(props) {
    const {formData} = props;
    
    const handleChange = (value) => {
        formData[props.name] = value
        props.handleSetData(formData)
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '31.6%'}}>
            <label> {props.label} </label>
            <Select
            size='large'
            placeholder='Escolha a permissão'
                style={{
                    width: "100%"
                }}
                onChange={handleChange}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>
    )
}
export default SelectPermission