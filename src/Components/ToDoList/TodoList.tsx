
import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: string; text: string; complete: boolean }[];
  toggleComplete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
