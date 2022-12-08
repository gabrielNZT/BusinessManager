import { ConfigProvider, DatePicker, Space } from 'antd';
import React from 'react';
import moment from 'moment'
import 'moment/locale/pt-br';
import locale from 'antd/es/locale/pt_BR';

const dateFormat = 'DD/MM/YYYY';

function DateEntry(props) {
    const { formData, item } = props;

    const handleChange = (value) => props.handleSetData({ ...formData, [item.tag]: value })
    const handleDefaultValue = () => formData[item.tag] ? moment(formData[item.tag]) : null

    return (
        <div className='div-custom-label'>
            <label>{item.label}</label>
            <Space direction="vertical" size={12}>
                <ConfigProvider locale={locale}>
                    <DatePicker
                        style={{ width: '100%' }}
                        defaultValue={handleDefaultValue()}
                        inputReadOnly={true}
                        onChange={(_, value) => handleChange(value)}
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
                </ConfigProvider>
            </Space>
        </div>
    )
}
export default DateEntry