import styled from "styled-components";
import {TodoTypes} from "../../types/todo.types.ts";

export const TodoStyled = styled.ul`
  margin: 0 0 1rem 0;
  list-style: none;
`

export const TodoItemUl = styled.ul`
  display: flex;
  list-style: none;
`

export const TodoItemButton = styled.button`
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #000000;
    transform: scale(1.5);
    transition: 0.3s ease-in-out;
  }
`

export const TodoItemCheck = styled(TodoItemButton)`
  margin: 0 0.5rem;

  &:hover {
    color: #38e109;
    transform: scale(1.5);
    transition: 0.3s ease-in-out;
  }
`

export const TodoInput = styled.input`
  padding: 0.5rem;
  margin: 0 0.5rem 0 0;
`

export const TodoEditButton = styled(TodoItemButton)`
  margin: 0 0.5rem;

  &:hover {
    color: #dca310;
  }
`

export const TodoItemTitle = styled.h3<TodoTypes>`
  text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
  flex: 1;
`

export const TodoButtonStyled = styled.button`
  padding: 0.8rem;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 0 0.5rem 0 0;
  &:hover {
    background-color: #fff;
    color: #000000;
    transition: 0.3s ease-in-out;
  }
`