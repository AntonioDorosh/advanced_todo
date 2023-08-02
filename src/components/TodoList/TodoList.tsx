import React from 'react';
import {
    TodoListContainer,
    TodoListSpan,
    TodoListTitle
} from "./styles/TodoList.styled.tsx";
import TodoForm from "../TodoForm/TodoForm.tsx";
import Todo from "../TodoItem/Todo.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";

const TodoList = () => {
    const {todos} = useMainTodo();

    return (
        <TodoListContainer>
            <TodoListTitle>Todo List</TodoListTitle>
            <TodoListSpan>React Todo List app</TodoListSpan>
            {todos.map((todo) => <Todo todo={todo}/>)}
            <TodoForm/>
        </TodoListContainer>
    );
};

export default TodoList;