import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
//import {createStore, applyMiddleware, compose} from 'redux';
//import reduxThunk from 'redux-thunk';
//import {Provider} from 'react-redux';
//import counterState from './counterState.js';

// OLD
// function loggerMiddleware (store) {
// 	return function (next) {
// 		return function (action) {
// 			const result = next(action);
// 			console.log(store.getState());
// 			return result;
// 		}
// 	}
	
// }
// ES6

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const loggerMiddleware = store => next => action => {
// 	const result = next(action);
// 	console.log(result);
// 	console.log(store.getState());
// 	return result;
// }
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));
const application = (

		<BrowserRouter>
		<App/>
		</BrowserRouter>
	
	)

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
