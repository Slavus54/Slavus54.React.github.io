import React, {createContext, useReducer} from 'react';
import {Reducer} from './Reducer.js';
import {ADD, SUB, ASS, DROP} from './actionTypes.js';

const initialState = {
	count: 0
}

export const AppContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

	const [state, dispatch] = useReducer(Reducer, initialState);

	const add = () => {
		dispatch({type: ADD});
	}
	const sub = () => {
		dispatch({type: SUB});
	}
	const ass = () => {
		dispatch({type: ASS});
	}
	const drop = () => {
		dispatch({type: DROP, payload: 0});
	}
	return (
		<AppContext.Provider value={{
			count: state.count, add,
			sub, ass, drop
		}}>
		{children}
		</AppContext.Provider>
	);
}