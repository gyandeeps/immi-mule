import React, { createContext, Reducer, useReducer, useContext } from "react";
import { addFileFn, removeFileFn } from "./file-actions";
import {
    FileTransactionType,
    FileTypesEnum,
    FilesDataType,
    ReducerActions
} from "../../types/file-types";
import { TransactionStatus } from "../../types/general";

const filesData = new Map<string, FilesDataType>([
    [
        "1",
        {
            fileName: "Ant Design Title 1",
            fileUrl: "Ant Design Title 1",
            transactionStatus: TransactionStatus.SUCCESS,
            transactionType: FileTransactionType.ADD
        }
    ],
    [
        "2",
        {
            fileName: "Ant Design Title 2",
            fileUrl: "Ant Design Title 2",
            transactionStatus: TransactionStatus.SUCCESS,
            transactionType: FileTransactionType.ADD
        }
    ]
]);

const fileTypes = new Set<FileTypesEnum>([
    FileTypesEnum.PASSPORT,
    FileTypesEnum.H1B_VISA
]);

const defaultState = {
    files: filesData,
    fileTypes
};

const reducers: Reducer<typeof defaultState, ReducerActions> = (
    state,
    action
) => {
    const newFiles = new Map<string, FilesDataType>(state.files);

    switch (action.type) {
        case "REMOVE_FILE":
            newFiles.delete(action.payload);

            return {
                ...state,
                files: newFiles
            };

        case "ADD_FILE":
            const { file, ...otherAttr } = action.payload;
            newFiles.set(file.name, {
                fileUrl: file.name,
                ...otherAttr,
                transactionType: FileTransactionType.ADD,
                transactionStatus: TransactionStatus.INPROGRESS
            });
            return {
                ...state,
                files: newFiles
            };

        case "FILE_STATUS":
            const fileItem = newFiles.get(action.payload.id);
            if (fileItem) {
                newFiles.set(action.payload.id, {
                    ...fileItem,
                    transactionStatus: action.payload.transactionStatus
                });
            }

            return {
                ...state,
                files: newFiles
            };

        default:
            return state;
    }
};

const FilesContext = createContext<
    [typeof defaultState, React.Dispatch<ReducerActions>]
>([defaultState, () => {}]);

export const FilesState: React.FC = ({ children }) => {
    const redStuff = useReducer(reducers, defaultState);

    return (
        <FilesContext.Provider value={redStuff}>
            {children}
        </FilesContext.Provider>
    );
};

export const useFiles = () => {
    const [state, dispatch] = useContext(FilesContext);

    return {
        ...state,
        addFile: addFileFn(dispatch),
        removeFile: removeFileFn(dispatch)
    };
};
