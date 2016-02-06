import {Injectable} from 'angular2/core';
import {Map} from "immutable";
import {applyMiddleware, createStore} from 'redux';
import {ReduxStore} from "./ReduxStore";
import {Reducer} from './Reducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(Reducer);

function thunkMiddleware({ dispatch, getState }) {
    return next => action =>
        typeof action === 'function' ?
            action(dispatch, getState) :
            next(action);
}

@Injectable()
export class Store extends ReduxStore {
    constructor() {
        super(store);
    }
}