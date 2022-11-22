import { Switch } from 'antd';
import React, { useState } from 'react';

function SwitchEnableUser(props) {
    const { formData, label, defaultValue } = props
    const [color, setColor] = useState({ background: formData?.enabled? 'green' : 'red' })

    const handleChange = (value) => {
        setColor(value ? { background: 'green' } : { background: 'red' })
        props.handleSetData({ ...formData, [props.name]: value })
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