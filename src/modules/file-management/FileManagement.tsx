import React from "react";
import "./FileManagement.scss";
import Empty from "../../components/empty/Empty";
import { useTitle } from "react-use";
import Files from "../../components/files/Files";
import { useFiles } from "../../context/FilesContext";
import AddFile from "../../components/files/AddFile";

const FileManagement: React.FC = () => {
    const { files, addFile, removeFile } = useFiles();

    useTitle("Immigration Mule: Files");

    return (
        <div className="immi-file-management">
            <AddFile onUpload={addFile} />
            {files.size > 0 ? (
                <Files onDelete={removeFile} data={files} />
            ) : (
                <Empty description={false} />
            )}
        </div>
    );
};

export default FileManagement;
