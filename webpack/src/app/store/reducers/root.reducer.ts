import { Map } from 'immutable';
import {  } from '../actions/root.actions';

var initialState = Map({ });

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}