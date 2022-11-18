import { Select } from "antd"
const { Option } = Select;

function SelectANT(props) {
    const { placeholder, onChange, defaultValue, item } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} key={props.index}>
            <label> {item.label}
                <Select
                    size="large"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    style={{
                        width: "310px"
                    }}
                    onChange={(value) => onChange({ value: value, key: item.key })}
                >
                    {item.elements.map((item, index) => (<Option key={index} value={item} />))}
                </Select>
            </label>
        </div>
    )
}
export default SelectANT