// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../actions/todoActions';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
