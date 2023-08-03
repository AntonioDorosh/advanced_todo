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
                <TodoListTitle>Todo List <span style={{color: todos.length > 0 ? 'green' : 'white'}}>{todos.length}</span></TodoListTitle>
                <TodoListSpan>React Todo List app</TodoListSpan>
                {todos.length === 0 ? <h2 style={{marginBlockEnd: '0.7rem'}}>Todo list is empty</h2> : todos.map((todo) => <Todo todo={todo}/>)}
                <TodoForm/>
            </TodoListContainer>
    );
};

export default TodoList;