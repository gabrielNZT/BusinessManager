import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useState } from 'react';

function LoginForm() {
  const [visibleIcon, setVisibleIcon] = useState('password')

  return (
    <Form className='form-loginform'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuário ou email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu nome de usuário ao seu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <div className='div-input-password'>
          {visibleIcon === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon('text')} className='sufix-icon' />
            : <EyeTwoTone onClick={() => setVisibleIcon('password')} className='sufix-icon'></EyeTwoTone>}
          <Form.Control onBlur={() => setVisibleIcon('password')} type={visibleIcon} placeholder="Digite sua senha"></Form.Control>
        </div>
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