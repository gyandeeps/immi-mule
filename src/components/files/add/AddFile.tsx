import React, { useState } from "react";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FileTypesEnum, FileAttributes } from "../../../types/file-types";
import PassportAdd from "./add-file-type/PassportAdd";
import H1bAdd from "./add-file-type/H1bAdd";
import SelectFileTypes from "./SelectFileType";

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

const AddFile: React.FC<AddFileProps> = ({ onUpload, fileTypes }) => {
    const [isModalOpen, changeModelOpen] = useState(false);
    const [
        selectedFileType,
        updateSelectedFileType
    ] = useState<FileTypesEnum | null>(null);

    const flipModelState = () => {
        changeModelOpen(!isModalOpen);
        updateSelectedFileType(null);
    };

    const Comp = getCompByType(selectedFileType);

    return (
        <>
            <Button onClick={flipModelState}>
                <UploadOutlined /> Click to Upload
            </Button>
            {selectedFileType === null && (
                <SelectFileTypes
                    fileTypes={fileTypes}
                    onFileTypeSelection={updateSelectedFileType}
                    isModalOpen={isModalOpen}
                    changeModelOpen={changeModelOpen}
                />
            )}

            {Comp && (
                <Comp
                    key={selectedFileType as string}
                    onUpload={onUpload}
                    isModalOpen={isModalOpen}
                    changeModelOpen={changeModelOpen}
                />
            )}
        </>
    );
};

export default AddFile;
