import React from "react";
import { List } from "antd";
import File from "./File";
import { FilesDataType } from "../../types/file-types";

type FilesProps = {
    data: Map<string, FilesDataType>;
    onDelete: (id: string) => void;
};

const Files: React.FC<FilesProps> = ({ data, onDelete }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={Array.from(data)}
            renderItem={([id, value]) => (
                <File {...value} id={id} onDelete={onDelete} />
            )}
        />
    );
};

export default Files;
