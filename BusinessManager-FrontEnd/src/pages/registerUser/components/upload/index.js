import { LoadingOutlined, InboxOutlined  } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    console.log(file)
    return isJpgOrPng && isLt2M;
};
const UploadUserPhoto = (props) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined style={{zIndex: 2, fontSize: '50px'}}/> : <InboxOutlined style={{fontSize: '50px'}} />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                {props.body}
            </div>
        </div>
    );
    return (
        <div style={{width: '31.6%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <label> {props.label} </label>
            <Upload 
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                            height: '100%',
                            zIndex: 1
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </div>
    );
};
export default UploadUserPhoto;