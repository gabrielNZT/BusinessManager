import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { cpfMask, phoneMask } from '../../../../global/utils'

function InputLabel(props) {
    const [value, setValue] = useState()
    const { formData, name } = props

    const handleState = (event) => {
        const {name: tag, value} = event.target

        if(tag === 'cpf') formData[tag] = cpfMask(value)
        else if (tag === 'phone') formData[tag] = phoneMask(value)
        else formData[tag] = value   

        props.handleSetData(formData)
        //setValue(formData[name])
    }

    return (
        <Form.Group className="div-register-user">
            <Form.Label bsPrefix="label-register-user">
                {props.label}
                <Form.Control
                    name={name}
                    value = {formData[name]}
                    type={props.type? props.type: 'text'}
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