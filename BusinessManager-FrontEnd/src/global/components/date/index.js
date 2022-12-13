import { DatePicker, Space } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;

function DateANT(props) {
    const { onChange } = props
    const { key, title } = props.item

    return (
        <div key={props.index}>
            <div className='div-search-fields'>
                <label style={{ fontWeight: 'bold' }}>{title}</label>
                <Space direction="vertical" size={12}>
                    <RangePicker
                        picker="year"
                        onChange={(_, value) => onChange({ key: key, value: value })} />
                </Space>
            </div>
        </div>
    )
}
export default DateANT