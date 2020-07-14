import React, { useState, useEffect } from "react";
import { Input, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FileAttributes } from "../../../../types/file-types";

type PassportAddProps = {
    setFormValidity: (val: boolean) => void;
    setAttributes: (att: Omit<FileAttributes, "type">) => void;
};

const PassportAdd: React.FC<PassportAddProps> = ({
    setFormValidity,
    setAttributes
}) => {
    const [currentFile, setCurrentFile] = useState<null | File>(null);
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        setFormValidity(Boolean(currentFile && fileName.length > 0));

        if (currentFile) {
            setAttributes({
                file: currentFile,
                name: fileName
            });
        }
    }, [currentFile, fileName, setFormValidity, setAttributes]);

    return (
        <>
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
        </>
    );
};

export default PassportAdd;
