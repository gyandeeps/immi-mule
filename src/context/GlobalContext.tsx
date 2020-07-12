import React, { createContext, Reducer, useReducer } from "react";

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
    inDev: true,
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

export const GlobalContext = createContext<
    [typeof defaultState, React.Dispatch<ReducerActions>]
>([defaultState, () => {}]);

export const GlobalState: React.FC = ({ children }) => {
    const redStuff = useReducer(reducers, defaultState);

    return (
        <GlobalContext.Provider value={redStuff}>
            {children}
        </GlobalContext.Provider>
    );
};
