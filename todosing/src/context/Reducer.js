import React from 'react';
import {ADD, CHANGE} from './ActionTypes';

export const Reducer = (state, action) => {
    switch(action.type) {
        case CHANGE: return {
            term: action.payload
        }
        case ADD: return {
            items: [...state.term, action.payload]
        }
        default: return state
    }
}