import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchLoadData} from './sagas.tsx';
import {Provider} from 'react-redux';
import rootReducer from './redux';

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
const SagaMiddleware = createSagaMiddleware();
const loggerMiddleware = store => next => action => {
	const result = next(action);
	console.log(result);
	console.log(store.getState());
	return result;
}
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, SagaMiddleware));
SagaMiddleware.run(watchLoadData);
const application = (
		<Provider store={store}>
		<BrowserRouter>
		<App/>
		</BrowserRouter>
		</Provider>
	)

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
