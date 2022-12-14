import { DatePicker, Space } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;

const DATE_FORMAT = 'DD/MM/YYYY'

function DateANT(props) {
    const { onChange } = props
    const { key, title } = props.item

    return (
        <div key={props.index}>
            <div className='div-search-fields'>
                <label style={{ fontWeight: 'bold' }}>{title}</label>
                <Space direction="vertical" size={12}>
                    <RangePicker
                        onChange={(_, value) => onChange({ key: key, value: value })}
                        format={DATE_FORMAT} />
                </Space>
            </div>
        </div>
    )
}
export default DateANT