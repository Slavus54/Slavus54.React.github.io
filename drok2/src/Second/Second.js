import React, {Component} from 'react';
import './Second.css';

export default class Second extends Component {
	constructor () {
		super();
		this.state = {

		}
	}
	getBack () {
		this.props.history.push({pathname: '/'}) 
	}
	render () {
		console.log(this.props);
		return (
			<div className="second">
			<h3>Second page</h3>
			<button id="butBack" onClick={this.getBack.bind(this)}>Вернуться на Главную</button>
			</div>
		);
	}
}
