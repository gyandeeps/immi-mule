import { Dispatch } from "react";
import {
    FileAttributes,
    ReducerActions,
    TransactionStatus
} from "../../types/file-types";

const delay = (time = 5000) => new Promise((res) => setTimeout(res, time));

export const addFileFn = (dispatch: Dispatch<ReducerActions>) => async (
    attr: FileAttributes
) => {
    dispatch({
        type: "ADD_FILE",
        payload: attr
    });

    await delay();

    dispatch({
        type: "FILE_STATUS",
        payload: {
            id: attr.file.name,
            transactionStatus: TransactionStatus.SUCCESS
        }
    });
};

export const removeFileFn = (dispatch: Dispatch<ReducerActions>) => async (
    id: string
) => {
    dispatch({
        type: "FILE_STATUS",
        payload: {
            id,
            transactionStatus: TransactionStatus.INPROGRESS
        }
    });
    await delay();

    dispatch({
        type: "REMOVE_FILE",
        payload: id
    });
};
