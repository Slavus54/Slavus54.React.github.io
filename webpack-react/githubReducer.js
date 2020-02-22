import React from 'react';
import {CLEAR_USERS, GET_REP, GET_USER, SEARCH_USERS, SET_LOADING, GET_VALUE} from './types.js';

const GithubReducer = (state, action) =>  {
	switch(action.type) {
		case SEARCH_USERS: return {
			users: action.payload,
			loading: false
		}
		case GET_REP: return {
			rep: action.payload,
			loading: false
		}
		case GET_USER: return {
			user: action.payload,
			loading: false
		}
		case SET_LOADING: return {
			loading: true
		}
		case CLEAR_USERS: return {
			users: []
		}
		case GET_VALUE: return action.payload
		default: return state
	}
}
export default GithubReducer
