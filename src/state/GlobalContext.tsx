import React, { createContext, Reducer, useReducer } from "react";

const defaultState = {
    inDev: true
};

type ReducerActions = {};

const reducers: Reducer<typeof defaultState, ReducerActions> = (state) => {
    return state;
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
