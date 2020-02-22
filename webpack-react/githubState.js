import React, {useReducer} from 'react';
import GithubContext from './githubContext.js';
import GithubReducer from './githubReducer.js';
import axios from 'axios';
import {CLEAR_USERS, GET_REP, GET_USER, SEARCH_USERS, SET_LOADING, GET_VALUE} from '../types.js';

const CLIENT_ID = '54a17a8cf1fe8379e2ae';
const CLIENT_SECRET ='8f6b57cc0cdadb0251641f1b81e22821b57049ab';

const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

const GithubState = ({children}) =>  {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		rep: []
	}
	const [state, dispatch] = useReducer(GithubReducer, initialState)
	
	const search = value => {
		const response = axios.get(
      	withCreds(`https://api.github.com/search/users?q=${value}&`)
    	)
		setLoading()
		dispatch({type: SEARCH_USERS, payload: response.data.items})
	}
	const getUser = name => {
		const response = axios.get(
      	withCreds(`https://api.github.com/users/${name}?`)
    	)
		setLoading()
		dispatch({type: GET_USER, payload: response.data})
	}
	const getRep = name => {
		const response = axios.get(
      	withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
    	)
		setLoading()
		dispatch({type: GET_REP, payload: response.data})
	}
	const clearUsers = () => {
		dispatch({type: CLEAR_USERS})
	}
	const setLoading = () => {
		dispatch({type: SET_LOADING})
	}
	const someShit = (value) => {
		dispatch({type: GET_VALUE, payload: {value}})
	}
	const {user, users, rep, loading} = state;
	return (
		<GithubContext.Provider value={{
			search, getUser, 
			getRep, clearUsers, 
			setLoading, user, 
			users, rep, loading, someShit
		}}>
		{children}
		</GithubContext.Provider>
	);
}
export default GithubState