import React from "react";
import { GlobalState } from "./GlobalContext";
import { FilesState } from "./files/FilesContext";
import { CasesState } from "./cases/CasesContext";

const AllStateContext: React.FC = ({ children }) => (
    <GlobalState>
        <FilesState>
            <CasesState>{children}</CasesState>
        </FilesState>
    </GlobalState>
);

export default AllStateContext;
