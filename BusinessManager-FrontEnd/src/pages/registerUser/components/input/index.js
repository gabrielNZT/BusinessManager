import { Form } from 'react-bootstrap'
import { cpfMask, phoneMask } from '../../../../global/utils'

function InputLabel(props) {
    const { formData } = props
    const { tag: name, type, label, placeholder, disabled, value } = props.item

    const handleState = (event) => {
        const { name: tag, value } = event.target
        props.handleSetData({ ...formData, [tag]: tag === 'cpf' ? cpfMask(value) : tag === 'phone' ? phoneMask(value) : value })
    }

    return (
        <Form.Group className="div-register-user">
            <Form.Label bsPrefix="label-register-user">
                {label}
                <Form.Control
                    disabled={disabled === true? true : false}
                    name={name}
                    value={disabled === true? value : formData[name]}
                    type={type ? type : 'text'}
                    onChange={(e) => handleState(e)}
                    placeholder={placeholder}
                />
            </Form.Label>
        </Form.Group>
    )
}
export default InputLabel