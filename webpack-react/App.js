import React, {Fragment, Component} from 'react';
import css from './App.css';
import Navbar from './Navbar/Navbar.js';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Information from './pages/Information.js';
import Profile from './pages/Profile.js';
import Alert from './Alert/Alert.js';

class App extends Component {
	render () {
		return (
			<Fragment>
				<div className="container">
				<h2 className="main-headline">My React App without bullshit</h2>
				<Navbar />
				<Alert alert={{text: 'Test alert', type: 'string'}}/>
				<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/information" component={Information} />
				<Route exact path="/profile/:name" component={Profile} />
				</Switch>
				</div>
			</Fragment>
		);
	}
} 

export default App