import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="Clean the room" done={true} />
      <TodoItem text="Return the book" done={true} />
      <TodoItem text="Check mail" done={false} />
      <TodoItem text="dd" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;