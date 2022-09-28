import { Button, Form } from "react-bootstrap"

export function ForgetPassword() {
    return (
        <div>
            <div>

                <h1> Esqueci a senha</h1>
            </div>

            <p>Para recuperar sua senha, informe seu email. Enviaremos
                uma nova senha temporária, lembre-se de alterá-la na
                próxima vez que acessar o sistema. </p>

            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control/>
                </Form.Group>
            </Form>
            <div>
                <Button />
                <i></i>
                <Button />
            </div>
        </div>
    )
}
export default ForgetPassword