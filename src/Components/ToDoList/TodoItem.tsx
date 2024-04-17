import React from 'react';
import styled from 'styled-components';

interface TodoItemProps {
  id: string;
  text: string;
  complete: boolean;
  toggleComplete: (id: string) => void;
}

const TodoItemContainer = styled.div<{ complete: boolean }>`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #ccc;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
`;

const TodoItem: React.FC<TodoItemProps> = ({ id, text, complete, toggleComplete }) => {
  return (
    <TodoItemContainer complete={complete}>
      <input type="checkbox" checked={complete} onChange={() => toggleComplete(id)} />
      <span>{text}</span>
    </TodoItemContainer>
  );
};

export default TodoItem;
