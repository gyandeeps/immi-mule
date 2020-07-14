import React, { useState } from "react";
import { Button, Modal, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FileTypesEnum, FileAttributes } from "../../../types/file-types";
import PassportAdd from "./add-file-type/PassportAdd";
import H1bAdd from "./add-file-type/H1bAdd";

type AddFileProps = {
    onUpload: (attributes: FileAttributes) => void;
    fileTypes: Set<FileTypesEnum>;
};

const getCompByType = (type: FileTypesEnum | null) => {
    switch (type) {
        case FileTypesEnum.PASSPORT:
            return PassportAdd;

        case FileTypesEnum.H1B_VISA:
            return H1bAdd;

        default:
            return null;
    }
};

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

const AddFile: React.FC<AddFileProps> = ({ onUpload, fileTypes }) => {
    const [isModalOpen, changeModelOpen] = useState(false);
    const [isFormValid, setFormValidity] = useState(false);
    const [attributes, setAttributes] = useState<
        Optional<Omit<FileAttributes, "type">, "file">
    >({ file: void 0 });

    const [
        selectedFileType,
        updateSelectedFileType
    ] = useState<FileTypesEnum | null>(null);

    const flipModelState = () => {
        changeModelOpen(!isModalOpen);
        updateSelectedFileType(null);
    };
    const onSubmit = () => {
        if (attributes.file && selectedFileType) {
            onUpload({
                ...attributes,
                type: selectedFileType
            });
            flipModelState();
        }
    };

    const Comp = getCompByType(selectedFileType);

    return (
        <>
            <Button onClick={flipModelState}>
                <UploadOutlined /> Click to Upload
            </Button>
            <Modal
                title="Add files"
                visible={isModalOpen}
                onOk={onSubmit}
                confirmLoading={false}
                onCancel={flipModelState}
                okButtonProps={{
                    disabled: !isFormValid
                }}
            >
                <Select
                    showSearch
                    placeholder="Select a file type"
                    optionFilterProp="children"
                    onChange={(file: FileTypesEnum) =>
                        updateSelectedFileType(file)
                    }
                    filterOption={(input, option) => {
                        if (option) {
                            return (
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            );
                        }
                        return false;
                    }}
                >
                    {Array.from(fileTypes).map((file) => (
                        <Select.Option value={file}>{file}</Select.Option>
                    ))}
                </Select>
                {Comp && (
                    <Comp
                        key={selectedFileType as string}
                        setFormValidity={setFormValidity}
                        setAttributes={setAttributes}
                    />
                )}
            </Modal>
        </>
    );
};

export default AddFile;
