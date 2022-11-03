import Form from 'react-bootstrap/Form';
function InputSearchField(props) {
    const { label, disabled, key: name, placeholder } = props.item
    return (
            <Form.Group key={props.index}>
                <Form.Label >
                    {label}
                    <Form.Control
                        disabled={disabled === true ? true : false}
                        name={name}
                        placeholder={placeholder}
                    />
                </Form.Label>
            </Form.Group>
    )
}
export default InputSearchField