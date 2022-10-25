import { AiTwotoneFilter } from "react-icons/ai";
import { Popover } from 'antd';
import React from 'react';
import CheckBoxGroup from "../checkBox";



function PopOver(props) {
    const text = <span>Selecionar Colunas</span>;
    const content = (<CheckBoxGroup columns={props.columns} />);

    return (
        <Popover placement="right" title={text} content={content} trigger="click">
            <AiTwotoneFilter style={{ fontSize: '2.2rem', color: '#ccd2d7', cursor: 'pointer' }} />
        </Popover>
    )
}
export default PopOver