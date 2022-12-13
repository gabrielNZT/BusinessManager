import ButtonsVertical from "../../global/components/buttonsVertical"
import {Form} from 'react-bootstrap'

function ForgetPasswordForm(props) {
    return (
        <Form onSubmit={props.handleSubmit} style={{ marginTop: '10%' }}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={(event) => props.setEmail(event.target.value)}
                    value={props.email}
                    type="email"
                    placeholder="Digite seu email" />
            </Form.Group>
            <ButtonsVertical primaryButton='RECUPERAR A SENHA' style={{ marginTop: '12%' }} />
        </Form>
    )
}
export default ForgetPasswordForm