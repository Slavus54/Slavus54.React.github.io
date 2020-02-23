import React, {Component, useContext} from 'react';
import './Counting.css';
//import {ADD, SUB, DROP, ASS} from './actionTypes';
import {AppContext} from './State.js';
//const initialState = {count: 0};


const Counting = () => {
	const {add, sub, ass, drop, count} = useContext(AppContext);
	return (
		<div className="counter-all">
		<b className="count">{count}</b>
 		<button onClick={add} className="but-main">Прибавить 1</button>
 		<button onClick={sub} className="but-main">Вычесть 1</button>
 		<button onClick={ass} className="but-main">Асинхронно добавить 100</button>
 		<button onClick={drop} className="but-main">Сбросить к херам</button>
		</div>
	);
}

export default Counting