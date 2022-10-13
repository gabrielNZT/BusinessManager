import { FaUserAlt } from 'react-icons/fa';
import { Avatar } from 'antd';
import React from 'react';

function DefaultAvatar() {
    return (
        <div style={{ position: 'fixed', right: '2%', top: '2%', cursor: 'pointer' }}>
            <Avatar style={{background: '#b259b1'}} size={60} icon={<FaUserAlt />} />
        </div>
    )
}
export default DefaultAvatar