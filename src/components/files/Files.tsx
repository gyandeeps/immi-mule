import React from "react";
import { List } from "antd";
import File from "./File";

type FilesProps = {
    data: Map<
        string,
        {
            title: string;
            fileUrl: string;
        }
    >;
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
