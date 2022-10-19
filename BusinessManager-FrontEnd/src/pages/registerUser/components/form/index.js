import { useState } from "react"
import { Form } from "react-bootstrap"
import { DateEntry, InputLabel, SelectPermission, UploadUserPhoto, SwitchEnableUser, PasswordField } from '..'
import DoubleSwitch from "../../../editUser/components/doubleSwitch";

function FormRegisterUser(props) {
    const [formData, setFormData] = useState({});
    const handleSetData = (data) => setFormData(data);

    console.log(formData)
    return (
        <Form className="form-register-user">
            {props.items.map((item, index) => {
                switch (item.type) {
                    case 'input':
                        return (<InputLabel
                            item={item}
                            name={item.name}
                            formData={formData}
                            handleSetData={handleSetData}
                            key={index} />)
                    case 'password':
                        return (<PasswordField
                            formData={formData}
                            handleSetData={handleSetData}
                            item={item}
                            key={index}
                        />)
                    case 'switchs':
                        return (<DoubleSwitch items={item.items}/>)
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