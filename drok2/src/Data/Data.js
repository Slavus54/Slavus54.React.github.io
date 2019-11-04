import React, {Component} from 'react';

export default class Data extends Component {
	
render () {
	function data () {
  		fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  		.then(response => response.json())
  		.then(commits => alert(commits[0].commit.committer.name))
  	}	
  	async function send () {
  		let user = {
  			name: 'John',
  			surname: 'Smith'
		};

		let response = await fetch('/article/fetch/post/user', {
  			method: 'POST',
  			headers: {
    		'Content-Type': 'application/json;charset=utf-8'
  		},
  			body: JSON.stringify(user)
		});

		let result = await response.json();
		result.message = function () {
			alert('Пользователь сохранен')
		}
		user.message()
  	}
	return (
		
  		<div>
		<p onClick={data}>get data</p>
		<p onClick={send}>send data</p>
  		</div>
	);
}
}
	