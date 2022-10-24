import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';

const FILE_POSITION = 0;
const BASE_64 = 1;
const CONTENT_TYPE = 0;

const getBase64 = async (file) => file ? (await getSRCImage(file)).split('base64,')[BASE_64] : null
const getContentType = async (file) => file? (await getSRCImage(file)).split('base64,')[CONTENT_TYPE] : null 
const getSRCImage = async (file) => {
    let src = file.url;
    if (!src) {
        src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
        })
    }
    return src
}

const UploadUserPhoto = (props) => {
    const { formData, handleSetData } = props;
    const [fileList, setFileList] = useState([]);
    const onChange = async ({ fileList: newFileList }) => {
        setFileList(newFileList);
        const base64 = await getBase64(newFileList[FILE_POSITION])
        const contentType = `${(await getContentType(newFileList[FILE_POSITION]))}`
        handleSetData({
            ...formData, [props.item.tag]: {
                base64: base64,
                contentType: contentType?  `${contentType}base64,` : null
            }
        });
    };
    const onPreview = async (file) => {
        const src = await getSRCImage(file);
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const uploadButton = (
        <div>
            <InboxOutlined style={{ fontSize: '50px' }} />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                {props.item.body}
            </div>
        </div>
    );
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '31.6%', gap: '10px' }}>
            <label> {props.item.label} </label>
            <ImgCrop
                modalClassName='modal-edit-image'
                fillColor='black'
                shape={props.item.shape}
                modalTitle='Editar a imagem'
                modalOk='Salvar'
                modalCancel='Cancelar'
                rotate>
                <Upload
                    maxCount={1}
                    showUploadList={true}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={(file) => onChange(file)}
                    onPreview={onPreview}
                >
                    {uploadButton}
                </Upload>
            </ImgCrop>
        </div>
    );
};
export default UploadUserPhoto;