import React from "react";
import { GlobalState } from "./GlobalContext";
import { FilesState } from "./FilesContext";

const AllStateContext: React.FC = ({ children }) => (
    <GlobalState>
        <FilesState>{children}</FilesState>
    </GlobalState>
);

export default AllStateContext;
