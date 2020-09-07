import {combineReducers} from 'redux';
import {usersListReduser} from './usersList';

export const rootReducer = combineReducers({
    list: usersListReduser,
});