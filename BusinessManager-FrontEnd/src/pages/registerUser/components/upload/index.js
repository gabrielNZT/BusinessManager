import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';

const INITIAL_VALUE = 0
 
const UploadUserPhoto = (props) => {
    const {formData, handleSetData} = props;
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        handleSetData({...formData, [props.item.tag]: newFileList[INITIAL_VALUE]?.originFileObj});
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
                
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const uploadButton = (
        <div>
            <InboxOutlined style={{fontSize: '50px'}} />
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
                    onChange={ (file) => onChange(file)}
                    onPreview={onPreview}
                >
                   { uploadButton }
                </Upload>
            </ImgCrop>
        </div>
    );
};
export default UploadUserPhoto;