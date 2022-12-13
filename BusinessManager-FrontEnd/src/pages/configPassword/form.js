import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form } from "react-bootstrap"
import { ButtonsVertical } from '../../global/components';

function ConfigPasswordForm(props) {
    const { visibleIcon, setVisibleIcon, setFieldValues, fieldValues, validate } = props;
    return (
        <Form onSubmit={props.handleSubmit} style={{ marginTop: '5%' }}>

            <Form.Group className="group-password" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <div className='div-input-password'>
                    {visibleIcon.password === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon({
                        ...visibleIcon,
                        password: 'text'
                    })} className='sufix-icon' />
                        : <EyeTwoTone onClick={() => setVisibleIcon({
                            ...visibleIcon,
                            password: 'password'
                        })} className='sufix-icon'></EyeTwoTone>}
                    <Form.Control
                        autoComplete="false"
                        value={fieldValues.password}
                        onChange={(e) => {
                            setFieldValues({ ...fieldValues, password: e.target.value })

                        }}
                        required
                        onBlur={() => setVisibleIcon({
                            ...visibleIcon,
                            password: 'password'
                        })}
                        type={visibleIcon.password}
                        placeholder="Digite sua senha"></Form.Control>
                </div>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="group-password" controlId="formBasicPassword1">
                <Form.Label>Confirmar senha</Form.Label>
                <div className='div-input-password'>
                    {visibleIcon.againPassword === 'password' ? <EyeInvisibleOutlined onClick={() => setVisibleIcon({
                        ...visibleIcon,
                        againPassword: 'text'
                    })} className='sufix-icon' />
                        : <EyeTwoTone onClick={() => setVisibleIcon({
                            ...visibleIcon,
                            againPassword: 'password'
                        })} className='sufix-icon'></EyeTwoTone>}
                    <Form.Control
                        required
                        autoComplete="false"
                        value={fieldValues.againPassword}
                        onChange={(e) => {
                            setFieldValues({ ...fieldValues, againPassword: e.target.value })

                        }}
                        onBlur={() => setVisibleIcon({
                            ...visibleIcon,
                            againPassword: 'password'
                        })}
                        type={visibleIcon.againPassword}
                        placeholder="Confirme a nova senha"></Form.Control>
                </div>
                {!validate && <Form.Text className="text-muted"> As senhas devem ser iguais
                </Form.Text>}
            </Form.Group>
            <ButtonsVertical primaryButton='SALVAR NOVA SENHA' />
        </Form>
    )
}
export default ConfigPasswordForm