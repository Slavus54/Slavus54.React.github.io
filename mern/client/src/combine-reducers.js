import { combineReducers } from 'redux';
import firstReducer from './Alert';
import secondReducer from './Auth';

export default combineReducers({
 firstReducer,
 secondReducer
});