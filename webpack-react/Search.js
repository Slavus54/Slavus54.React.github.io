import React, {useContext, useState} from 'react';
import AlertContext from '../context/alert/alertContext.js';
import GithubContext from '../context/github/githubContext.js';

const Search = () => {
	const [value, setValue] = useState('');
	const kol = useContext(AlertContext);
	//const {someShit} = useContext(GithubContext);
	const onSubmit = event => {
		if (event.key !== 'Enter') {
			//show('This is alert');
			//console.log(value);
			return
		} 
		if (value.trim()) { // can use value !== ''
			//someShit(value.trim())
			//console.log('Make request - ', value);
			const valu = event.target.value;
			var response = fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({valu})
			})
			.then(res => {
				return res.json()
			})
			.then(data => console.log(data))
			//var result = response;
			//console.log(result)
		} else {
			kol.show('Введите данные пользователя')
		}
	}
	return (
		<div className="form-group">
		<input id="special-input" value={value} onChange={(event) => setValue(event.target.value)} onKeyPress={onSubmit} type="text" className="form-control" placeholder="Введите ник пользователя"></input>
		</div>
	);
}

export default Search