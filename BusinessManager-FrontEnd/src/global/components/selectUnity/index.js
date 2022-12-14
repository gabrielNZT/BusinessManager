import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import React, { useState, useRef } from 'react';
const { Option } = Select;
let index = 0;

function SelectUnity(props) {
    const { formData, item } = props;
    const [items, setItems] = useState(props.item.elements);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const handleChange = (value) => props.handleSetData({ ...formData, [item.tag]: value })
    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '31.6%' }}>
            <label> {item.label} </label>
            <Select
                defaultValue={formData[item.tag]}
                onChange={handleChange}
                size='large'
                style={{
                    width: '100%',
                }}
                placeholder="Escolha a unidade"
                dropdownRender={(menu) => (
                    <>
                        {menu}
                        <Divider
                            style={{
                                margin: '8px 0',
                            }}
                        />
                        <Space
                            style={{
                                padding: '0 8px 4px',
                            }}
                        >
                            <Input
                                placeholder="Digite a unidade"
                                ref={inputRef}
                                value={name}
                                onChange={onNameChange}
                            />
                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                Adicionar unidade
                            </Button>
                        </Space>
                    </>
                )}
            >
                {items.map((item) => (
                    <Option key={item}>{item}</Option>
                ))}
            </Select>
        </div>
    )
}
export default SelectUnity