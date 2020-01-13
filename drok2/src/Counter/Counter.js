import React, {Component} from 'react';
import './Counter.css';

export default class Counter extends Component {
	constructor () {
		super();
		this.state = {
			style: 'main',
			count: 0
		} 
	}
	Handler (value) {
		this.setState({count: this.state.count + value});
	}
	getBack () {
		this.props.history.push({pathname: '/'});
	}
	render () {
		return (
			<div className={this.state.style}>
			<h2>Счетчик: <b>{this.state.count}</b></h2>
			<button onClick={() => this.Handler(1)} className="butCount">Добавить 1</button>
			<button onClick={() => this.Handler(-1)} className="butCount">Вычесть 1</button>
			<button onClick={this.getBack.bind(this)} className="butCount">Назад</button>
			
			</div>
		);
	}
}