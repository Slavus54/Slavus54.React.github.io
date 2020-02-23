import {ADD, SUB, ASS, DROP} from './actionTypes.js';

export const Reducer = (state, action) => {
  switch(action.type) {
		case ADD: return {
			count: state.count + 1
		}
		case SUB: return {
			count: state.count - 1
		}
		case ASS: return {
			count: state.count + 100
		}
		case DROP: return {
			count: action.payload
		}
		default: return state
	}
}