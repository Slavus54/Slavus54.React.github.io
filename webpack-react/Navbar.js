import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	// const [data, sendData] = useState({
	// 	name: '',
	// 	password: ''
	// })
	return (
		<nav className="navbar">
			<Link to={{pathname: '/'}} className="navbar-brand" exact>Github Поиск</Link>
			<ul className="nav-menu">
			<li><Link to={{pathname: '/'}} exact>Главная</Link></li>
			<li><Link to={{pathname: '/information'}}>Информация</Link></li>
			
			</ul>
		</nav>
	);
}	

export default Navbar