import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import css from './App.css';
import {BrowserRouter} from 'react-router-dom';
import AlertState from './alertState.js';
import GithubState from './githubState.js';

const app = (
	<GithubState>
	<AlertState>
	<BrowserRouter>
		<App/>
	</BrowserRouter>
	</AlertState>
	</GithubState>
);

ReactDOM.render(app, document.getElementById('app'))
