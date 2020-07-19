import { Moment } from "moment";
import { TransactionStatus } from "./general";

export enum CaseTransactionType {
    ADD = "ADD",
    DELETE = "DELETE"
}

export interface CaseAddType {
    receiptDate: Moment;
    caseId: string;
}

export interface CaseType extends CaseAddType {
    transactionType: CaseTransactionType;
    transactionStatus: TransactionStatus;
}

type RemoveCaseAction = {
    type: "REMOVE_CASE";
    payload: string;
};

type AddCaseAction = {
    type: "ADD_CASE";
    payload: CaseAddType;
};

type CaseStatusAction = {
    type: "CASE_STATUS";
    payload: {
        id: string;
        transactionStatus: TransactionStatus;
    };
};

export type ReducerActions =
    | RemoveCaseAction
    | AddCaseAction
    | CaseStatusAction;
