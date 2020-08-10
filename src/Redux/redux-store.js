import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import gitPageReducer from './gitPageReducer';

let reducers = combineReducers({
    gitHub: gitPageReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;