import { Select } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Option } = Select;


function SelectPermission(props) {
    const {formData} = props;
    const allPermission = useSelector(state => state.allPermission)
    
    const handleChange = (value) => props.handleSetData({...formData, [props.name]: value})

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
                {allPermission.map((item, index) => (<Option key={index} value={item.role}/>))}
            </Select>
        </div>
    )
}
export default SelectPermission