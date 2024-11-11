// src/reducers/index.js
import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

export default combineReducers({
  todos: todosReducer,
});
