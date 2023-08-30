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
`

export const SpanStyled = styled.span<{ todos: TodoTypes[], color: string }>`
  color: ${({todos, color}) => todos.length === 0 ? '#fff' : color};
`

export const ThemeButton = styled.button`
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 0.25s;


  & > svg {
    color: #FFF;
  }
`