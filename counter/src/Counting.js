import React, {Component, useReducer} from 'react';
import './Counting.css';
import {ADD, SUB, DROP, ASS} from './actionTypes';

const initialState = {count: 0};

function reducer(state, action) {
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
const Counting = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="counter-all">
		<b className="count">{state.count}</b>
 		<button onClick={() => dispatch({type: 'ADD'})} className="but-main">Прибавить 1</button>
 		<button onClick={() => dispatch({type: 'SUB'})} className="but-main">Вычесть 1</button>
 		<button onClick={() => {
 			console.log('great shot');
 			dispatch({type: 'ASS'})
 		}} className="but-main">Асинхронно добавить 100</button>
 		<button onClick={() => dispatch({type: 'DROP', payload: 0})} className="but-main">Сбросить к херам</button>
		</div>
	);
}

export default Counting