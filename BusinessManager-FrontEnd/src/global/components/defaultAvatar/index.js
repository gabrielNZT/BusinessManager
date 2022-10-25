import { FaUserAlt } from 'react-icons/fa';
import { Avatar } from 'antd';
import React from 'react';
import { binToBase64 } from '../../utils';

function DefaultAvatar() {
    const userDetails = JSON.parse(localStorage.getItem('user'))
    console.log(userDetails)
    const src = userDetails?.imageBytes === undefined ? null : (userDetails.cotentType + binToBase64(userDetails?.imageBytes))
    console.log(src)

    async function getSRC(src) {
        if(src === null) return null
        const readerSRC = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(src);
            reader.onload = () => resolve(reader.result);
        })
        return readerSRC
     }

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