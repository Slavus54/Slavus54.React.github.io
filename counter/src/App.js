import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import All from './All/All';
import {connect} from 'react-redux';
import {add, sub} from './action';
import {Route, Link} from 'react-router-dom';

class App extends Component {
	constructor () {
		super();
		this.state = {
			counter: 'count',
			but: 'but-main'
		}
	}
	render () {
		return (
 			<All>
 			<b className={this.state.counter}>{this.props.count}</b>
 			<button onClick={this.props.Add} className={this.state.but}>Прибавить 1</button>
 			<button onClick={this.props.Sub} className={this.state.but}>Вычесть 1</button>
 			</All>
		);
	}
	
}
	function MaxState (state) {
		return {
			count: state.count
		}
	}
	function MaxDis (dispatch) {
		return {
			Add: () => dispatch(add()),
			Sub: () => dispatch(sub())
		}
	}
export default connect(MaxState, MaxDis)(App)


