import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

function PasswordField(props) {
    const { formData } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '31.6%', gap: '10px' }}>
            <label> {props.item.label} </label>
            <Space direction="vertical" className='password-field'>
                <Input.Password
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