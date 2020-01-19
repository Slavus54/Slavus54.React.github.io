import {ADD, SUB, NUMBER, CHANGE, DROP} from './actionTypes';

const initialState = {
	count: 5,
	right: 'Ponasenkov',
	who: 'Гений: '
}
export default function rootReducer (state = initialState, action) {
	switch(action.type) {
		case ADD: return {
			count: state.count + 1,
			right: 'Ponasenkov',
			who: 'Гений: '
		}
		case SUB: return {
			count: state.count - 1,
			right: 'Ponasenkov',
			who: 'Гений: '
		}
		case NUMBER: return {
			count: state.count * action.pay,
			right: 'Ponasenkov',
			who: 'Гений: '
		}
		case CHANGE: return {
			count: action.val,
			right: 'Ponasenkov',
			who: 'Гений: '
		}
		case DROP: return {
			count: action.drop,
			right: 'Sokolov',
			who: 'Дешёвка и шваль: '
		}
		default: return state
	}
}


const addCounter = {
	type: 'ADD'
}
//store.dispatch(addCounter);
//console.log(store.getState());