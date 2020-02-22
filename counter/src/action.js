import {ADD, SUB, DROP} from './actionTypes';

export function add (number) {
	return {
		type: ADD,
		payload: number
	}
}
export function sub () {
	return {
		type: SUB
	}
}
export function async (number) {
	 return (dispatch) => {
		 setTimeout(() => {
	  		dispatch(add(number))
	  	}, 1500)
	 console.log('Async here');
	 }
	// return {
	// 	type: ASS,
	// 	payload: number
	// } 
}
export function drop () {
	return {
		type: DROP,
		payload: 0
	}
}