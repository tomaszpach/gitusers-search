import { combineReducers } from 'redux';
import gitUsers from './gitUsers';

export const reducers = combineReducers({
    gitUsers: gitUsers
});