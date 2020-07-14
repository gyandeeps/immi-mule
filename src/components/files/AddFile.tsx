import React, { useState } from "react";
import { Upload, Button, Modal, Input } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { FileTypesEnum } from "../../context/FilesContext";

type AddFileProps = {
    onUpload: (file: File) => void;
    fileTypes: Set<FileTypesEnum>;
};

const AddFile: React.FC<AddFileProps> = ({ onUpload }) => {
    const [isModalOpen, changeModelOpen] = useState(false);
    const [currentFile, setCurrentFile] = useState<null | File>(null);
    const [fileName, setFileName] = useState("");

    const flipModelState = () => {
        changeModelOpen(!isModalOpen);
        setCurrentFile(null);
        setFileName("");
    };
    const onLoadBegin = () => {
        if (currentFile) {
            const extension = currentFile.name.split(".").pop();

            const myNewFile = new File(
                [currentFile],
                `${fileName}.${extension}`,
                { type: currentFile.type }
            );
            onUpload(myNewFile);
            flipModelState();
        }
    };

    return (
        <>
            <Button onClick={flipModelState}>
                <UploadOutlined /> Click to Upload
            </Button>
            <Modal
                title="Add files"
                visible={isModalOpen}
                onOk={onLoadBegin}
                confirmLoading={false}
                onCancel={flipModelState}
                okButtonProps={{
                    disabled: currentFile === null || fileName.length === 0
                }}
            >
                <Input
                    value={fileName}
                    type="text"
                    onChange={({ target }) => setFileName(target.value)}
                    allowClear
                    placeholder="File Name"
                    addonBefore="File Name"
                />
                <Upload.Dragger
                    showUploadList={false}
                    customRequest={(request) => {
                        if (fileName.length === 0) {
                            const [, ...nameArr] = request.file.name
                                .split(".")
                                .reverse();
                            setFileName(nameArr.join(""));
                        }
                        setCurrentFile(request.file);
                    }}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                        Click or drag file to this area to upload
                    </p>
                </Upload.Dragger>
            </Modal>
        </>
    );
};

export default AddFile;
