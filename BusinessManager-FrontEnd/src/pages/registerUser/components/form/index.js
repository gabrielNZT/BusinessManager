import { Form } from "react-bootstrap"
import { DateEntry, InputLabel, SelectPermission, UploadUserPhoto, SwitchEnableUser, PasswordField, SelectUnity } from '..'
import DoubleSwitch from "../../../editUser/components/doubleSwitch";
import ClickSubmit from "../../../../contexts/clickSubmit";
import { useContext } from "react";

function FormRegisterUser(props) {
    const { handleSubmit, setLoading } = useContext(ClickSubmit)
    const { formData, setFormData } = props
    const handleSetData = (data) => setFormData(data);
    const handleKeyDown = (event) => {
        if (event.code === 'Enter') {
            setLoading(true)
            handleSubmit(formData)
        }
    }

    return (
        <Form onKeyDown={(event) => handleKeyDown(event)} style={{ rowGap: props.rowGap }} className="form-register-user">
            {props.items.map((item, index) => {
                switch (item.type) {
                    case 'input':
                        return (<InputLabel
                            item={item}
                            name={item.tag}
                            formData={formData}
                            handleSetData={handleSetData}
                            key={index} />)
                    case 'password':
                        return (<PasswordField
                            formData={props.formData}
                            handleSetData={handleSetData}
                            item={item}
                            key={index}
                        />)
                    case 'switchs':
                        return (<DoubleSwitch key={index} items={item.items} />)
                    case 'selectUnity':
                        return (<SelectUnity item={item} formData={formData} key={index} handleSetData={handleSetData} />)
                    case 'select':
                        return (<SelectPermission
                            item={item}
                            formData={formData}
                            handleSetData={handleSetData}
                            key={index} />)
                    case 'upload':
                        return (<UploadUserPhoto
                            formData={formData}
                            handleSetData={handleSetData}
                            src={props.src}
                            item={item}
                            key={index} />)
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