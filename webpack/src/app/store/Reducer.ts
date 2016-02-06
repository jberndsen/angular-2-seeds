import {combineReducers} from 'redux';
import {rootReducer} from './reducers/root.reducer';

const Reducer = combineReducers({
    root: rootReducer
});

export {Reducer};