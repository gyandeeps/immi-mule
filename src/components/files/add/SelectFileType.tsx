import React, { useState } from "react";
import { Modal, Select } from "antd";
import { FileTypesEnum } from "../../../types/file-types";

type SelectFileTypesProps = {
    fileTypes: Set<FileTypesEnum>;
    onFileTypeSelection: (type: FileTypesEnum) => void;
    isModalOpen: boolean;
    changeModelOpen: (open: boolean) => void;
};

const SelectFileTypes: React.FC<SelectFileTypesProps> = ({
    fileTypes,
    onFileTypeSelection,
    isModalOpen,
    changeModelOpen
}) => {
    const [
        selectedFileType,
        updateSelectedFileType
    ] = useState<FileTypesEnum | null>(null);

    const onSubmit = () => {
        if (selectedFileType) {
            onFileTypeSelection(selectedFileType);
        }
    };

    return (
        <Modal
            title="Add files"
            visible={isModalOpen}
            onOk={onSubmit}
            confirmLoading={false}
            onCancel={() => changeModelOpen(false)}
            okButtonProps={{
                disabled: selectedFileType === null
            }}
        >
            <Select
                showSearch
                placeholder="Select a file type"
                optionFilterProp="children"
                onChange={(file: FileTypesEnum) => updateSelectedFileType(file)}
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
                style={{ textTransform: "capitalize" }}
            >
                {Array.from(fileTypes).map((file) => (
                    <Select.Option
                        style={{ textTransform: "capitalize" }}
                        value={file}
                        key={file}
                    >
                        {file.replace("_", " ").toLowerCase()}
                    </Select.Option>
                ))}
            </Select>
        </Modal>
    );
};

export default SelectFileTypes;
