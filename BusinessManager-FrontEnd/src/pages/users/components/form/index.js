import { useState } from "react"
import { Form } from "react-bootstrap"
import DateEntry from "../datePicker"
import InputLabel from "../input"
import SelectPermission from "../selectPermission"
import SwitchEnableUser from "../switch"
import UploadUserPhoto from "../upload"

function FormRegisterUser(props) {
    const [formData, setFormData] = useState({})

    return (
        <Form className="form-register-user">
            {props.items.map((item, index) => {
                switch (item.type) {
                    case 'input':
                        return (<InputLabel
                            type={item.mask}
                            tag={item.tag}
                            formData={formData}
                            setFormData={setFormData}
                            placeholder={item.placeholder}
                            label={item.label}
                            key={index} />)
                    case 'select':
                        return (<SelectPermission label={item.label} key={index} />)
                    case 'upload':
                        return (<UploadUserPhoto body={item.body} label={item.label} key={index} />)
                    case 'switch':
                        return (<SwitchEnableUser label={item.label} key={index} />)
                    case 'data':
                        return (<DateEntry label={item.label} key={index} />)
                    default:
                        return null
                }
            })}
        </Form>
    )
}
export default FormRegisterUser