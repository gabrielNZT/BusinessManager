import { Form } from 'react-bootstrap'

function InputLabel(props) {
    return (
        <Form.Group>
            <Form.Label>
                {props.label}
                <Form.Control />
            </Form.Label>
        </Form.Group>
    )
}
export default InputLabel