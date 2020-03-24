import React from 'react';
import {useReducer, createContext} from 'react';
import {ADD, CHANGE} from './ActionTypes';
import {Reducer} from './Reducer';

const initialState = {
    term: '',
    items: []
}

export const Context = createContext(initialState);

export const State = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const add = (text) => {
        dispatch({type: ADD, payload: text})
    }
    const change = (text) => {
        dispatch({type: CHANGE, payload: text})
    }
    return (
        <Context.Provider value={{
            term: state.term, items: state.items,
            add, change 
        }}>
            {children}
        </Context.Provider>
    );
}