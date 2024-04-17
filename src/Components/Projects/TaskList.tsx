import React, { useState } from 'react';
import TodoList from '../ToDoList/TodoList';
import {v4 as uuid} from 'uuid';
const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: uuid(), text: 'Learn React', complete: false },
    { id: uuid(), text: 'Learn TypeScript', complete: false },
  ]);

  const toggleComplete = (id: string): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;