import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/lib/upload";

type AddFileProps = {
    onUpload: (file: File) => void;
};

const AddFile: React.FC<AddFileProps> = ({ onUpload }) => {
    const props: UploadProps = {
        customRequest(request) {
            onUpload(request.file);
        },
        showUploadList: false
    };

    return (
        <Upload {...props}>
            <Button>
                <UploadOutlined /> Click to Upload
            </Button>
        </Upload>
    );
};

export default AddFile;
