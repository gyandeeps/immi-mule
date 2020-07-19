import React from "react";
import { List, Button, Tooltip, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { CaseType } from "../../types/case-types";
import { TransactionStatus } from "../../types/general";

type CaseProps = {
    id: string;
    onDelete: (id: string) => void;
} & CaseType;

const Case: React.FC<CaseProps> = ({ id, transactionStatus, onDelete }) => {
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
                <List.Item.Meta title={id} />
            </List.Item>
        </Spin>
    );
};

export default Case;
