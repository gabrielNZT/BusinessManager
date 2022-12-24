import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { FetchCompanyName, FetchUserData, LogIn } from '../../store/login/actions.js'
import { useDispatch } from 'react-redux';
import { ToastNotify } from '../../global/components';
import { useNavigate } from 'react-router-dom';
import { GetUserProperties } from '../../services/request.js';

function LoginForm() {
  const dispatch = useDispatch()

  const [visibleIcon, setVisibleIcon] = useState('password')
  const [user, setUser] = useState({
    name: '',
    password: ''
  })
  let navigate = useNavigate()

  const handleNavigate = (goTo) => {
    switch (goTo) {
      case 'FORGET_PASSWORD':
        navigate('../forget-password', { replace: true })
        return
      case 'REGISTER':
        navigate('../register-company', { replace: true })
        return
      case 'CONFIG_PASSWORD':
        navigate('../config-password', { replace: true })
        return
      case 'HOME_PAGE':
        navigate('../home', { replace: true })
        return
      default:
        navigate('../', { replace: true })
        return
    }
  }

  async function getHasTemporaryPassword(username) {
    const response = await GetUserProperties(username)
    dispatch(FetchCompanyName(response.data.company))
    dispatch(FetchUserData(response.data))
    localStorage.setItem('company', JSON.stringify({
      name: response.data.company.name,
      id: response.data.company.id
    }));
    localStorage.setItem('user', JSON.stringify({
      contentType: response.data.contentType,
      imageBytes: response.data.imageBytes
    }));
    handleNavigate(response.data?.hasTemporaryPassword ? 'CONFIG_PASSWORD' : 'HOME_PAGE')
  }

  async function handleToast() {
    const response = await ToastNotify({ type: 'LOGIN_PROMISE', payload: { user: { name: user.name, password: user.password } } })
    dispatch(LogIn({ ...user, access_token: response.data.access_token }))
    localStorage.setItem('auth', JSON.stringify({ access_token: response.data.access_token }))
    getHasTemporaryPassword(response.data.username)
    setUser({ name: '', password: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleToast()
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

      <Form.Group className="group-password" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <div className='div-input-password'>
          {visibleIcon === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon('text')} className='sufix-icon' />
            : <EyeTwoTone onClick={() => setVisibleIcon('password')} className='sufix-icon'></EyeTwoTone>}
          <Form.Control
            autoComplete='false'
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

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '20px' }}>
        <i className='i-loginform-forget-password' onClick={() => handleNavigate('FORGET_PASSWORD')}>Esqueci a senha</i>
      </div>

      <div className='div-buttons'>
        <Button className='button-submit-form' variant="primary" type="submit">
          ENTRAR
        </Button>

        <i className='i-ou'>ou</i>

        <Button className='button-register' variant="primary" onClick={() => handleNavigate('REGISTER')}>
          CADASTRE SUA EMPRESA
        </Button>

      </div>
    </Form>
  );
}

export default LoginForm;