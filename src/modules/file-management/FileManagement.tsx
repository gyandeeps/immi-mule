import React, { useContext } from "react";
import "./FileManagement.scss";
import Empty from "../../components/empty/Empty";
import { useTitle } from "react-use";
import Files from "../../components/files/Files";
import { GlobalContext } from "../../context/GlobalContext";
import AddFile from "../../components/files/AddFile";

const FileManagement: React.FC = () => {
    const [{ files }, dispatch] = useContext(GlobalContext);

    useTitle("Immigration Mule: Files");

    const onDelete = (id: string) =>
        dispatch({
            type: "REMOVE_FILE",
            payload: id
        });

    const onUpload = (file: File) =>
        dispatch({
            type: "ADD_FILE",
            payload: file
        });

    return (
        <div className="immi-file-management">
            <AddFile onUpload={onUpload} />
            {files.size > 0 ? (
                <Files onDelete={onDelete} data={files} />
            ) : (
                <Empty description={false} />
            )}
        </div>
    );
};

export default FileManagement;
