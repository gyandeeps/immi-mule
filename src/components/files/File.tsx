import React from "react";
import { List, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

type FileProps = {
    id: string;
    title: string;
    fileUrl: string;
    onDelete: (id: string) => void;
};

const File: React.FC<FileProps> = ({ title, fileUrl, onDelete, id }) => {
    return (
        <List.Item
            actions={[
                <Tooltip title="Delete file">
                    <Button
                        danger
                        type="default"
                        shape="circle"
                        icon={<DeleteOutlined />}
                        onClick={() => onDelete(id)}
                    />
                </Tooltip>
            ]}
        >
            <List.Item.Meta title={title} />
        </List.Item>
    );
};

export default File;
