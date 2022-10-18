import { Switch } from 'antd';
import React, { useState } from 'react';

function SwitchEnableUser(props) {
    const {formData} = props
    const [color, setColor] = useState({ background: 'green' })

    const handleChange = (value) => {
        setColor(value ? { background: 'green' } : { background: 'red' })
        props.handleSetData({...formData, [props.name]: value})
    }

    return (
        <div className='div-custom-label'>
            <div>
                <label> {props.label} </label>
            </div>
            <Switch
                style={color}
                onChange={handleChange}
                checkedChildren="Sim"
                unCheckedChildren="Não"
                defaultChecked />
        </div>
    )
}
export default SwitchEnableUser