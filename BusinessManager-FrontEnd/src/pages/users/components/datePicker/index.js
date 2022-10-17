import { ConfigProvider, DatePicker, Space } from 'antd';
import React from 'react';
import 'moment/locale/pt-br';
import locale from 'antd/es/locale/pt_BR';

const dateFormat = 'DD/MM/YYYY';

function DateEntry(props) {
    return (
        <div className='div-custom-label'>
            <label>{props.label}</label>
            <Space direction="vertical" size={12}>
                <ConfigProvider locale={locale}>
                    <DatePicker
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