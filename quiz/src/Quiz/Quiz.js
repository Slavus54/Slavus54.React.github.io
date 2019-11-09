import React, {Component} from 'react';
import './Quiz.css';
import Active from '../Active/Active';

export default class Quiz extends Component {
	render() {
		function h1 () {
		
		var rightAnswer = document.getElementById('1');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			alert('You are right!');	 
		} 
		fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
		.then(response=>response.json())
		.then(commits => alert(commits[9].commit.verification.verified))
	}
		function h2 () {
		
		var rightAnswer = document.getElementById('4');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			alert('You are right!');	 
		} 
	}
		function h3 () {
		
		var rightAnswer = document.getElementById('7');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			alert('You are right!');	 
		} 
	}
		async function send () {
			var valu1 = document.getElementById('place1').value;
			var valu2 = document.getElementById('place2').value;
			var valu3 = document.getElementById('place3').value;
			console.log(valu1)
			
			var response = await fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({valu1, valu2, valu3})
			});
			var result = await response.json();
			alert(JSON.stringify(result));
		}
		return (
			<div className="quiz">
			<h3>Добро пожаловать, {this.props.name}</h3>
			<Active id1="1" id2="2" id3="3" Hand={h1} qus="1. Кто гений?" right="Евгений Понасенков" other1="Наталья Дубникова" other2="Игорь Варданян" />
			<Active id1="4" id2="5" id3="6" Hand={h2} qus="2. Кто великая и прекрасная богиня химоньки?" right="Светлана Табатчикова" other1="Оксана Батлук" other2="Наталья Дубникова" />
			<Active id1="7" id2="8" id3="9" Hand={h3} qus="3. Кто великолепнейшая дрокальщица исторки?" right="Оксана Батлук" other1="Наталья Дубникова" other2="Светлана Табатчикова" />
			<input className="place" id="place1" placeholder="Введите любимую страну"></input>
			<input className="place" id="place2" placeholder="Введите вашего кумира в истории"></input>
			<input className="place" id="place3" placeholder="Введите фамилию жалкого доцентишки с физиономией пьяного водопроводчика"></input>
			<button id="but1" onClick={send}>Отправить</button>
			</div>
		);
	}
}