import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import css from './components/App.css';
import {BrowserRouter} from 'react-router-dom';
import AlertState from './components/context/alert/alertState.js';
import GithubState from './components/context/github/githubState.js';

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