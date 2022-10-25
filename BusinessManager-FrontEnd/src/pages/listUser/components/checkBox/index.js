import { Checkbox } from 'antd';
import React from 'react';

function CheckBoxGroup(props) {

    return (
        <Checkbox.Group onChange={(event) => console.log(event)} style={{ display: 'flex', flexDirection: 'column' }}>
            {props.columns.map((item, index) => <Checkbox value={item.tag} key={index}>{item.name}</Checkbox>)}
        </Checkbox.Group>
    )
}
export default CheckBoxGroup