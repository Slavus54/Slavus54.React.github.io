import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Users.css';

const Users = (props) => {
	function fuck () {
		alert('I will kiss her');
	};
	function getBack () {
		props.history.push({pathname: '/'}) 
	};
	return (
		<div className="users-main">
		<li><Link onClick={fuck.bind(this)} to={{pathname: '/users/id1'}}>Olga</Link></li>
		<li><Link onClick={fuck.bind(this)} to={{pathname: '/users/id2'}}>Irina</Link></li>
		<li><Link onClick={fuck.bind(this)} to={{pathname: '/users/id3'}}>Arina</Link></li>
		<button id="butBackUsers" onClick={getBack.bind(this)}>Вернуться на Главную</button>
		</div>
	);
}
export default Users