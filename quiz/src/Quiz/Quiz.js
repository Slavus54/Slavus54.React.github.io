import React, {Component} from 'react';
import './Quiz.css';
import Active from '../Active/Active';

export default class Quiz extends Component {
	render() {
		function h1 () {
		alert('You are right!');
		var rightAnswer = document.getElementById('1');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			 
		} 
		fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
		.then(response=>response.json())
		.then(commits => alert(commits[9].commit.verification.verified))
	}
		async function send () {
			var valu = document.getElementById('place').value;
			console.log(valu)
			
			var response = await fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({valu})
			});
			var result = await response.json();
			alert(JSON.stringify(result));
		}
		return (
			<div className="quiz">
			<h3>Добро пожаловать, {this.props.name}</h3>
			<Active Hand={h1}/>
			<form action="#">
			<input id="place" placeholder="Введите любимую страну"></input>
			<button id="but1" onClick={send}>Отправить</button>
			</form>
			</div>
		);
	}
}