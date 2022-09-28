import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { LogIn } from '../reducer/actions.js'
import { useDispatch } from 'react-redux';
import { ToastNotify } from '../../../global/toast/index.js';

function LoginForm() {
  const dispatch = useDispatch()
  const [visibleIcon, setVisibleIcon] = useState('password')
  const [user, setUser] = useState({
    name: '',
    password: ''
  })

  function callBack(){
    const access_token = JSON.parse(localStorage.getItem('auth'))?.access_token
    dispatch(LogIn({...user, access_token: access_token}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ToastNotify({type: 'LOGIN_PROMISE', payload: {user: {name: user.name, password: user.password}}}, callBack)
    setUser({name: '', password: ''})
  }

  return (
    <Form onSubmit={handleSubmit} className='form-loginform'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuário ou email</Form.Label>
        <Form.Control
          required
          value={user.name}
          type="text"
          placeholder="Digite seu nome de usuário ao seu email"
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <div className='div-input-password'>
          {visibleIcon === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon('text')} className='sufix-icon' />
            : <EyeTwoTone onClick={() => setVisibleIcon('password')} className='sufix-icon'></EyeTwoTone>}
          <Form.Control
            required
            value={user.password}
            onChange={(event) => setUser({ ...user, password: event.target.value })}
            onBlur={() => setVisibleIcon('password')}
            type={visibleIcon}
            placeholder="Digite sua senha"></Form.Control>
        </div>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <i className='i-loginform-forget-password'>Esqueci a senha</i>

      <div className='div-buttons'>
        <Button className='button-submit-form' variant="primary" type="submit">
          ENTRAR
        </Button>

        <i className='i-ou'>ou</i>

        <Button className='button-register' variant="primary">
          CADASTRE SUA EMPRESA
        </Button>

      </div>
    </Form>
  );
}

export default LoginForm;