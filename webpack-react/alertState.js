import React, {useReducer} from 'react';
import AlertContext from './alertContext.js';
import AlertReducer from './alertReducer.js';
import {HIDE_ALERT, SHOW_ALERT, COUNT} from './types.js';

const AlertState = ({children}) => {
	const [state, dispatch] = useReducer(AlertReducer, null);

	const hide = () => {
		dispatch({type: HIDE_ALERT})
	}
	const show = (text) => {
		dispatch({type: SHOW_ALERT, payload: {text}})
	}
	return (
		<AlertContext.Provider value={{hide, show, alert: state}}>
			{children}
		</AlertContext.Provider>
	);
}

export default AlertState
