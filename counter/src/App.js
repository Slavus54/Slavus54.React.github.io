import React, {Fragment, useContext} from 'react';
import logo from './logo.svg';
//import './App.css';
//import All from './All/All';
import {Route, Link} from 'react-router-dom';
import Counting from './Counting.js';
import {GlobalProvider} from './State.js';

const App = () => {
	return (
			<GlobalProvider>
 			<Fragment>
 			<Counting />
 			</Fragment>
 			</GlobalProvider>
		);

	
}
	
export default App


