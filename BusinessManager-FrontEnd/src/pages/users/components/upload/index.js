import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} foto adicionada com sucesso`);
        } else if (status === 'error') {
            message.error(`${info.file.name} erro.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const UploadUserPhoto = () => (
    <div style={{ height: 'fit-content', width: '200px' }}>
        <p style={{ color: 'gray' }}>Imagem do usuário</p>
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: 'black' }} />
            </p>
            <p className="ant-upload-text">Clique ou arraste a imagem para esta áerea para fazer upload</p>
        </Dragger>
    </div>
);
export default UploadUserPhoto;