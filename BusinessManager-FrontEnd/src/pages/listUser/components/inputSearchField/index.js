import Form from 'react-bootstrap/Form';
function InputSearchField(props) {
    const { label, disabled, key: name, placeholder } = props.item
    const { data, setData, index } = props

    return (
        <Form.Group key={index}>
            <Form.Label >
                {label}
                <Form.Control
                    value={data ? data[name] ? data[name].value : '' : ''}
                    onChange={(e) => setData({ ...data, [name]: { field: name, value: e.target.value } })}
                    disabled={disabled === true ? true : false}
                    name={name}
                    placeholder={placeholder}
                />
            </Form.Label>
        </Form.Group>
    )
}
export default InputSearchField