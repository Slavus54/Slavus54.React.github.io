import React, {Component, useState, useContext} from 'react';
import AlertContext from './alertContext.js';

const Information = () => {
	const {show} = useContext(AlertContext);
	const [count, setCount] = useState(0);

	const onHand = () => {
		show('INFA TOP');
	}
	return (
		<div className="jumbotron jumbotron-fluid">
 		<div className="container-flued">
    	<h1 className="display-4">Информация</h1>
    	<p className="lead">Версия приложения - <b>1.0.2.0</b></p>
  		<button onClick={onHand}></button>
  		<p>Вы кликнули {count} раз</p>
      		<button onClick={() => setCount(count + 1)}>
       	 		Нажми на меня
      		</button>
  		</div>
		</div>
	);
}

export default Information
