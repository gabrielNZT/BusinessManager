import { FaUserAlt } from 'react-icons/fa';
import { Avatar } from 'antd';
import React from 'react';
import { binToBase64 } from '../../utils';

function DefaultAvatar() {
    const userDetails = JSON.parse(localStorage.getItem('user'))
    const src = userDetails?.imageBytes === undefined ? null : (userDetails.contentType + binToBase64(userDetails?.imageBytes))

    return (
        <div style={{ position: 'fixed', right: '2%', top: '2%', cursor: 'pointer' }}>

            <Avatar
                src={src}
                style={{ background: '#b259b1' }}
                size={60}
                icon={<FaUserAlt />} />
        </div>
    )
}
export default DefaultAvatar