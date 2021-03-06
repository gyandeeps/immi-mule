import React from "react";
import { List, Button, Tooltip, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FilesDataType } from "../../types/file-types";
import { TransactionStatus } from "../../types/general";

type FileProps = {
    id: string;
    onDelete: (id: string) => void;
} & FilesDataType;

const File: React.FC<FileProps> = ({
    fileName,
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
                <List.Item.Meta title={fileName} />
            </List.Item>
        </Spin>
    );
};

export default File;
