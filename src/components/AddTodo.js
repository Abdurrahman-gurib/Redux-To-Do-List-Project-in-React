// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

export default function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text,
      }));
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}
