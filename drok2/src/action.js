import {ADD, SUB, NUMBER, CHANGE, DROP} from './actionTypes';

export function add() {
	return {
		type: ADD
	}
}
export function sub() {
	return {
		type: SUB
	}
}
export function number(num) {
	return {
		type: NUMBER,
		pay: num
	}
}
export function change(event) {
	console.log(typeof event.target.value);
	return {
		type: CHANGE,
		val: event.target.value
	}
}
export function drop() {
	return {
		type: DROP
	}
}