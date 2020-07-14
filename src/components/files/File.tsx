import React from "react";
import { List, Button, Tooltip, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FilesDataType, TransactionStatus } from "../../types/file-types";

type FileProps = {
    id: string;
    onDelete: (id: string) => void;
} & FilesDataType;

const File: React.FC<FileProps> = ({
    title,
    transactionStatus,
    onDelete,
    id
}) => {
    return (
        <Spin
            spinning={transactionStatus === TransactionStatus.INPROGRESS}
            size="small"
        >
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
        </Spin>
    );
};

export default File;
