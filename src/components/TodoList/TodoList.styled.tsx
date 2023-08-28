import styled from "styled-components";
import {TodoTypes} from "../../types/todo.types.ts";


export const TodoListContainer = styled.div`
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  background: #ff6666;
  color: #fff;
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
`

export const TodoListTitle = styled.h1`

  margin: 0 0 0.2rem 0;

  &:after {
    content: '';
    border-bottom: 1px solid #fff;
    display: block;
    width: 100%;
    margin: 1rem 0;
  }
`

export const SpanStyled = styled.span<{ todos: TodoTypes[], color: string }>`
  color: ${({todos, color}) => todos.length === 0 ? '#fff' : color};
`