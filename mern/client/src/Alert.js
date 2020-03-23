import {REMOVE_ALERT} from './actionTypes';

const initialState = {
	currentUsers: 0
}

export default function rootReducer (state = initialState, action) {
	const {type, payload} = action;

	switch(type) {
		case REMOVE_ALERT: return {
			//state.filter(alert => alert.id !== payload)
		}
		default: return state
	}
}