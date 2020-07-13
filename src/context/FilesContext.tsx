import React, { createContext, Reducer, useReducer, useContext } from "react";

type FilesDataType = Map<string, { title: string; fileUrl: string }>;

const filesData: FilesDataType = new Map([
    [
        "1",
        {
            title: "Ant Design Title 1",
            fileUrl: "Ant Design Title 1"
        }
    ],
    [
        "2",
        {
            title: "Ant Design Title 2",
            fileUrl: "Ant Design Title 2"
        }
    ],
    [
        "3",
        {
            title: "Ant Design Title 3",
            fileUrl: "Ant Design Title 3"
        }
    ]
]);

const defaultState = {
    files: filesData
};

type RemoveFileAction = {
    type: "REMOVE_FILE";
    payload: string;
};

type AddFileAction = {
    type: "ADD_FILE";
    payload: File;
};

type ReducerActions = RemoveFileAction | AddFileAction;

const reducers: Reducer<typeof defaultState, ReducerActions> = (
    state,
    action
) => {
    switch (action.type) {
        case "REMOVE_FILE":
            const newRemove: FilesDataType = new Map(state.files);
            newRemove.delete(action.payload);

            return {
                ...state,
                files: newRemove
            };

        case "ADD_FILE":
            const newAdd: FilesDataType = new Map(state.files);
            newAdd.set(action.payload.name, {
                fileUrl: action.payload.name,
                title: action.payload.name
            });

            return {
                ...state,
                files: newAdd
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
    const [{ files }, dispatch] = useContext(FilesContext);

    const addFile = (file: File) =>
        dispatch({
            type: "ADD_FILE",
            payload: file
        });

    const removeFile = (id: string) =>
        dispatch({
            type: "REMOVE_FILE",
            payload: id
        });

    return { files, addFile, removeFile };
};
