import React from "react";
import { List } from "antd";
import Case from "./Case";
import { CaseType } from "../../types/case-types";

type CasesProps = {
    data: Map<string, CaseType>;
    onDelete: (id: string) => void;
};

const Cases: React.FC<CasesProps> = ({ data, onDelete }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={Array.from(data)}
            renderItem={([id, value]) => (
                <Case {...value} id={id} onDelete={onDelete} />
            )}
        />
    );
};

export default Cases;
