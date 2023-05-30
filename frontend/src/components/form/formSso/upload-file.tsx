import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, UploadProps } from 'antd';
import React from 'react';

const { Dragger } = Upload;

interface Props {
    callback: any;
}

const UploadFileSc: React.FC<Props> = ({ callback }) => {
    const props: UploadProps = {
        name: 'file',
        multiple: false,
        showUploadList: false,
        beforeUpload: (file: any) => {
            const exts = file.name.split('.');
            const ext = exts[exts.length - 1];

            // if (!["crt"].includes(ext)) {
            //   message.error(`${file.name} Only .rst file are allowed`);
            //   return false;
            // }
            if (file.size >= 10 * 1024 * 1024) {
                message.error(`${file.name} reach limit file size (<1Mb)`);
                return false;
            }

            const reader = new FileReader();

            reader.onload = (e: any) => {
                // console.log(e.target.result);
                callback(e.target.result);
            };
            reader.readAsText(file);

            // Prevent upload
            return false;
        },
    };

    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload file</Button>
        </Upload>
    );
};

export default UploadFileSc;
