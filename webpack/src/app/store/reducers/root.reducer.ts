import { Map } from 'immutable';
import {  } from '../actions/root.actions';

var initialState = Map({ todos: [] });

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            let todos = state.get('todos');
            todos.push({title: action.title});
            return state.set('todos', todos);
        default:
            return state;
    }
}