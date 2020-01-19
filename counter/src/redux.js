import {ADD, SUB} from './actionTypes';

const Initialstate = {
	count : 0
}

export default function rootReducer (state = Initialstate, action) {
	switch(action.type) {
		case ADD: return {
			count: state.count + 1
		}
		case SUB: return {
			count: state.count - 1
		}
		default: return state
	}
}