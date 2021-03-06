import { TransactionStatus } from "./general";

export enum FileTransactionType {
    ADD = "ADD",
    DELETE = "DELETE"
}

export type FilesDataType = {
    fileName: string;
    fileUrl: string;
    transactionType: FileTransactionType;
    transactionStatus: TransactionStatus;
    [key: string]: any;
};

type RemoveFileAction = {
    type: "REMOVE_FILE";
    payload: string;
};

type AddFileAction = {
    type: "ADD_FILE";
    payload: FileAttributes;
};

type FileStatusAction = {
    type: "FILE_STATUS";
    payload: {
        id: string;
        transactionStatus: TransactionStatus;
    };
};

export type ReducerActions =
    | RemoveFileAction
    | AddFileAction
    | FileStatusAction;

/// TODO - const enum not working
export enum FileTypesEnum {
    PASSPORT = "PASSPORT",
    H1B_VISA = "H1B_VISA"
}

export type FileAttributes = {
    file: File;
    type: FileTypesEnum;
    fileName: string;
    [key: string]: any;
};
