import { DatePicker, Space } from 'antd';
import React from 'react';
const dateFormat = 'DD/MM/YYYY';

function DateANT(props) {
    const { onChange } = props
    const { key, title } = props.item

    return (
        <div key={props.index}>
            <div className='div-search-fields'>
                <label style={{ fontWeight: 'bold' }}>{title}</label>
                <Space direction="vertical" size={12}>
                    <DatePicker style={{ width: '320px' }}
                        inputReadOnly={true}
                        onChange={(_, dateString) => onChange({ key: key, value: dateString })}
                        size='large'
                        format={dateFormat}
                        dateRender={(current) => {
                            return (
                                <div className="ant-picker-cell-inner">
                                    {current.date()}
                                </div>
                            );
                        }}
                    />
                </Space>
            </div>
        </div>
    )
}
export default DateANT