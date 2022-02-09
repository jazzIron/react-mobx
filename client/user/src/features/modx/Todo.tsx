import styled from '@emotion/styled';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export function Todo() {
  return (
    <TodoStyled>
      <TodoForm />
      <TodoList />
    </TodoStyled>
  );
}

const TodoStyled = styled.div``;
