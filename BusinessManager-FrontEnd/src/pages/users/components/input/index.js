import { Form } from 'react-bootstrap'
import { cpfMask, phoneMask } from '../../../../global/utils'

function InputLabel(props) {
    const { formData, name } = props

    const handleState = (event) => {
        const { name: tag, value } = event.target
        props.handleSetData({ ...formData, [tag]: tag === 'cpf' ? cpfMask(value) : tag === 'phone' ? phoneMask(value) : value })
    }

    return (
        <Form.Group className="div-register-user">
            <Form.Label bsPrefix="label-register-user">
                {props.label}
                <Form.Control
                    name={name}
                    value={formData[name]}
                    type={props.type ? props.type : 'text'}
                    onChange={(e) => {
                        handleState(e)
                    }}
                    placeholder={props.placeholder}
                />
            </Form.Label>
        </Form.Group>
    )
}
export default InputLabel