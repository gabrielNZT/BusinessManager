import { Form } from 'react-bootstrap'
import { cpfMask, phoneMask } from '../../../../global/utils'
import PasswordField from '../passwordInput'

function InputLabel(props) {
    const { formData } = props
    const { name, type, label, mask, placeholder } = props.item

    const handleState = (event) => {
        const { name: tag, value } = event.target
        props.handleSetData({ ...formData, [tag]: tag === 'cpf' ? cpfMask(value) : tag === 'phone' ? phoneMask(value) : value })
    }

    return (
        <Form.Group className="div-register-user">
            <Form.Label bsPrefix="label-register-user">
                {label}
                {mask !== 'password' ? (<Form.Control
                    name={name}
                    value={formData[name]}
                    type={type ? type : 'text'}
                    onChange={(e) => handleState(e)}
                    placeholder={placeholder}
                />) : (<PasswordField />)}

            </Form.Label>
        </Form.Group>
    )
}
export default InputLabel