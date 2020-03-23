import {SET_ALERT, REMOVE_ALERT, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL} from './actionTypes';
import uuid from 'uuid';
import axios from 'axios';
import setAuthToken from './utils/setAuthToken';

export function setAlert(msg) {
	const id = uuid.v4();
	return {
		type: SET_ALERT,
		payload: {msg, id}
	}
}
export const setAuth = (name) => async dispatch => {
	const config = {
		headers: {'Content-Type' : 'application/json'}
	}
	const body = JSON.stringify({name});
	try {
		const res = axios.post('/api/users', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors
	}
	return {
		
	}
}
export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const res = await axios.get('/api/auth');

		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (err) {

	}
}
export const setLogin = (email, password) => async dispatch => {
	const config = {
		headers: {'Content-Type' : 'application/json'}
	}
	const body = JSON.stringify({email, password});
	console.log(email);
	try {
		const res = axios.post('/api/auth', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors
		if (errors) {
			errors.forEach((error)=> {
				dispatch(setAlert(err.msg));
			})
		}
		dispatch({
			type: LOGIN_FAIL
		})
	}
	return {
		
	}
}