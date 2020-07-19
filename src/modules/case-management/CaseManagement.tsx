import React from "react";
import Empty from "../../components/empty/Empty";
import "./CaseManagement.scss";
import { useTitle } from "react-use";
import AddCase from "../../components/cases/AddCase";
import { useCases } from "../../state/cases/CasesContext";
import Cases from "../../components/cases/Cases";

const CaseManagement: React.FC = () => {
    const { cases, addCase, removeCase } = useCases();

    useTitle("Immigration Mule: Cases");

    return (
        <div className="immi-case">
            <div>
                <AddCase onUpload={addCase} />
            </div>
            {cases.size > 0 ? (
                <Cases onDelete={removeCase} data={cases} />
            ) : (
                <Empty description={false} />
            )}
        </div>
    );
};

export default CaseManagement;
