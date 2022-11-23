import { DatePicker, Space } from 'antd';
import React from 'react';
const dateFormat = 'DD/MM/YYYY';

function DateANT(props) {
    const { title, onChange } = props
    return (
        <div key={props.index}>
            <div  className='div-search-fields'>
                <label style={{ fontWeight: 'bold' }}>{title}</label>
                <Space direction="vertical" size={12}>
                    <DatePicker style={{ width: '320px' }}
                        inputReadOnly={true}
                        onChange={onChange}
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