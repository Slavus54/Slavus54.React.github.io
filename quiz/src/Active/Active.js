import React from 'react'; 
import './Active.css';

export default function Active (props) {
function h1 () {
		alert('You are right!');
		var rightAnswer = document.getElementById('1');
		var wrong1Answer = document.getElementById('2');
		var wrong2Answer = document.getElementById('3');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
		} else if (wrong1Answer) {
			wrong1Answer.style.backgroundColor = 'red';
		} else if (wrong2Answer) {
			wrong2Answer.style.backgroundColor = 'red';
		}
		fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
		.then(response=>response.json())
		.then(commits => alert(commits[9].commit.verification.verified))
	}
	
	return (
		<div className="Active">
		<p>
		<h3>1. Кто гений?</h3>
		<ul>
		<li onClick={props.Hand} id="1">Евгений Понасенков</li>
		<li onClick={props.Hand} id="2">Оксана Батлук</li>
		<li onClick={props.Hand} id="3">Светлана Табатчикова</li>
		</ul>
		</p>
		</div>
	);
}