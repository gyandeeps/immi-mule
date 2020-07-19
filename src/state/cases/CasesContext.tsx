import React, { createContext, Reducer, useReducer, useContext } from "react";
import {
    ReducerActions,
    CaseType,
    CaseTransactionType
} from "../../types/case-types";
import { TransactionStatus } from "../../types/general";
import moment from "moment";
import { addCaseFn, removeCaseFn } from "./case-actions";

const casesData = new Map<string, CaseType>([
    [
        "123",
        {
            caseId: "123",
            receiptDate: moment(Date.now()),
            transactionStatus: TransactionStatus.SUCCESS,
            transactionType: CaseTransactionType.ADD
        }
    ],
    [
        "345",
        {
            caseId: "345",
            receiptDate: moment(Date.now()),
            transactionStatus: TransactionStatus.SUCCESS,
            transactionType: CaseTransactionType.ADD
        }
    ]
]);

const defaultState = {
    cases: casesData
};

const reducers: Reducer<typeof defaultState, ReducerActions> = (
    state,
    action
) => {
    const newCases = new Map<string, CaseType>(state.cases);

    switch (action.type) {
        case "REMOVE_CASE":
            newCases.delete(action.payload);

            return {
                ...state,
                cases: newCases
            };

        case "ADD_CASE":
            newCases.set(action.payload.caseId, {
                ...action.payload,
                transactionType: CaseTransactionType.ADD,
                transactionStatus: TransactionStatus.INPROGRESS
            });
            return {
                ...state,
                cases: newCases
            };

        case "CASE_STATUS":
            const fileItem = newCases.get(action.payload.id);
            if (fileItem) {
                newCases.set(action.payload.id, {
                    ...fileItem,
                    transactionStatus: action.payload.transactionStatus
                });
            }

            return {
                ...state,
                cases: newCases
            };

        default:
            return state;
    }
};

const CasesContext = createContext<
    [typeof defaultState, React.Dispatch<ReducerActions>]
>([defaultState, () => {}]);

export const CasesState: React.FC = ({ children }) => {
    const caseStuff = useReducer(reducers, defaultState);

    return (
        <CasesContext.Provider value={caseStuff}>
            {children}
        </CasesContext.Provider>
    );
};

export const useCases = () => {
    const [state, dispatch] = useContext(CasesContext);

    return {
        ...state,
        addCase: addCaseFn(dispatch),
        removeCase: removeCaseFn(dispatch)
    };
};
