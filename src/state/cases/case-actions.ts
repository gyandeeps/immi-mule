import { Dispatch } from "react";
import { CaseAddType, ReducerActions } from "../../types/case-types";
import { TransactionStatus } from "../../types/general";

const delay = (time = 5000) => new Promise((res) => setTimeout(res, time));

export const addCaseFn = (dispatch: Dispatch<ReducerActions>) => async (
    attr: CaseAddType
) => {
    dispatch({
        type: "ADD_CASE",
        payload: attr
    });

    await delay();

    dispatch({
        type: "CASE_STATUS",
        payload: {
            id: attr.caseId,
            transactionStatus: TransactionStatus.SUCCESS
        }
    });
};

export const removeCaseFn = (dispatch: Dispatch<ReducerActions>) => async (
    id: string
) => {
    dispatch({
        type: "CASE_STATUS",
        payload: {
            id,
            transactionStatus: TransactionStatus.INPROGRESS
        }
    });
    await delay();

    dispatch({
        type: "REMOVE_CASE",
        payload: id
    });
};
