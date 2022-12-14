import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function PasswordField(props) {
    const { formData, handleSetData } = props
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const { password, repeatPassword, ...rest } = formData
        if (formData.passwordLocked === false) {
            handleSetData({ ...rest })
            setDisabled(true)
        } else setDisabled(false)
    }, [formData, handleSetData]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '31.6%', gap: '10px' }}>
            <label> {props.item.label} </label>
            <Space direction="vertical" className='password-field'>
                <Input.Password
                    disabled={disabled}
                    value={formData[props.item.tag]}
                    autoComplete='false'
                    onChange={(event) => props.handleSetData({ ...formData, [props.item.tag]: event.target.value })}
                    size='large'
                    placeholder={props.item.placeholder}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Space>
        </div>
    )
}
export default PasswordField