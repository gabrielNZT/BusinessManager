import { Switch } from 'antd';
import React, { useState } from 'react';

function SwitchEnableUser(props) {
    const [color, setColor] = useState({ background: 'green' })

    const handleChange = (e) => {
        setColor(e ? { background: 'green' } : { background: 'red' })
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