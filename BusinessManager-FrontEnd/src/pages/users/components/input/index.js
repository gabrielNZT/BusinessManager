import { Form } from 'react-bootstrap'
import { cpfMask, phoneMask } from '../../../../global/utils'

function InputLabel(props) {
    const { formData, setFormData, tag } = props

    const handleState = (event) => {
        const value = event.target.value
        switch (tag) {
            case 'cpf':
                formData[tag] = cpfMask(value)
                return formData
            case 'phone':
                formData[tag] = phoneMask(value)
                return formData
            default:
                formData[tag] = value
                return formData
        }
    }


    return (
        <Form.Group className="div-register-user">
            <Form.Label bsPrefix="label-register-user">
                {props.label}
                <Form.Control
                    value = {formData[tag]}
                    type={props.type? props.type: 'text'}
                    onChange={(e) =>  setFormData(handleState(e))}
                    placeholder={props.placeholder}
                />
            </Form.Label>
        </Form.Group>
    )
}
export default InputLabel