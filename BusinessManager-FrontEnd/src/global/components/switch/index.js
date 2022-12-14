import { Switch } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SwitchEnableUser(props) {
    const { formData, label, defaultValue } = props
    const tableParams = useSelector(state => state.list.tableParams)
    const [color, setColor] = useState({ background: (formData?.enabled || formData?.isEnabled ) ? 'green' : 'red' })

    const handleChange = (value) => {
        setColor(value ? { background: 'green' } : { background: 'red' })
        props.handleSetData({ ...formData, [props.name]: value }, tableParams)
    }

    return (
        !label ? (<Switch
            style={color}
            onChange={handleChange}
            checkedChildren="Sim"
            unCheckedChildren="Não"
            defaultChecked={defaultValue} />) :
            (<div className='div-custom-label'>
                <div className='div-label'>
                    <label> {props.label} </label>
                </div>
                <div style={{ width: '17%' }}>
                    <Switch
                        style={color}
                        onChange={handleChange}
                        checkedChildren="Sim"
                        unCheckedChildren="Não"
                        defaultChecked />
                </div>
            </div>)

    )
}
export default SwitchEnableUser