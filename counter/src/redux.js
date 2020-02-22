import {ADD, SUB, DROP} from './actionTypes';

const Initialstate = {
	count : 0
}

export default function rootReducer (state = Initialstate, action) {
	switch(action.type) {
		case ADD: return {
			count: state.count + action.payload
		}
		case SUB: return {
			count: state.count - 1
		}
		case DROP: return {
			count: action.payload
		}
		default: return state
	}
}