import { useState } from "react"
import { Form } from "react-bootstrap"
import DateEntry from "../datePicker"
import InputLabel from "../input"
import SelectPermission from "../selectPermission"
import SwitchEnableUser from "../switch"
import UploadUserPhoto from "../upload"

function FormRegisterUser(props) {
    const [formData, setFormData] = useState({});
    const [test, setTest] = useState(false)

    const handleSetData = (data) => {
        //setTest(!test)
        console.log(data)
        setFormData(data);
    }

    console.log("Fora" +formData)
    return (
        <Form className="form-register-user">
            {props.items.map((item, index) => {
                switch (item.type) {
                    case 'input':
                        return (<InputLabel
                            name={item.tag}
                            type={item.mask}
                            formData={formData}
                            handleSetData={handleSetData}
                            placeholder={item.placeholder}
                            label={item.label}
                            key={index} />)
                    case 'select':
                        return (<SelectPermission
                            name={item.tag}
                            formData={formData}
                            handleSetData={handleSetData}
                            label={item.label}
                            key={index} />)
                    case 'upload':
                        return (<UploadUserPhoto body={item.body} label={item.label} key={index} />)
                    case 'switch':
                        return (<SwitchEnableUser
                            name={item.tag}
                            formData={formData}
                            handleSetData={handleSetData}
                            label={item.label}
                            key={index} />)
                    case 'data':
                        return (<DateEntry
                            name={item.tag}
                            handleSetData={handleSetData}
                            formData={formData} 
                            label={item.label} 
                            key={index} />)
                    default:
                        return null
                }
            })}
        </Form>
    )
}
export default FormRegisterUser