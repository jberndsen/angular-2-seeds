import { Map } from 'immutable';
import {  } from '../actions/root.actions';

var initialState = { todos: [] };

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            let newstate = Object.assign({}, state);
            newstate.todos.push({title: action.title});
            return newstate;
        default:
            return state;
    }
}