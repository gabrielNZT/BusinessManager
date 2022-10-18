import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { Form } from "react-bootstrap"

function PasswordField(props) {
    const [visibleIcon, setVisibleIcon] = useState({
        password: 'password'
    })
    console.log("aqui")
    
    return (
        <div className='div-input-password'>
            {visibleIcon.password === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon({
                ...visibleIcon,
                password: 'text'
            })} className='icon-register-user' />
                : <EyeTwoTone onClick={() => setVisibleIcon({
                    ...visibleIcon,
                    password: 'password'
                })} className='icon-register-user'></EyeTwoTone>}
            <Form.Control
                autoComplete="false"
                required
                onBlur={() => setVisibleIcon({
                    ...visibleIcon,
                    password: 'password'
                })}
                type={visibleIcon.password}
                placeholder="Digite sua senha"></Form.Control>
        </div>
    )
}
export default PasswordField