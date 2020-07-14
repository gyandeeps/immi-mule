import React from "react";
import Empty from "../../components/empty/Empty";
import "./Case.scss";
import { useTitle } from "react-use";

const Case: React.FC = () => {
    useTitle("Immigration Mule: Cases");

    return (
        <div className="immi-case">
            <Empty description={false} />
        </div>
    );
};

export default Case;
