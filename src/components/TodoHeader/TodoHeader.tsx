import React from 'react';
import {TodoListTitle} from "../TodoList/styles/TodoList.styled.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";
import {
    TodoHeaderContainer,
    TodoHeaderList,
    TodoHeaderListItem
} from "./styles/TodoHeader.styled.tsx";

const TodoHeader = () => {
    const {todos} = useMainTodo();

    return (
        <TodoHeaderContainer>
            <TodoListTitle>Todo List <span
                style={{color: todos.length > 0 ? 'green' : 'white'}}>{todos.length}</span></TodoListTitle>
            <nav>
                <TodoHeaderList>
                    <TodoHeaderListItem>All</TodoHeaderListItem>
                    <TodoHeaderListItem>Pending</TodoHeaderListItem>
                    <TodoHeaderListItem>Completed</TodoHeaderListItem>
                </TodoHeaderList>
            </nav>
        </TodoHeaderContainer>
    );
};

export default TodoHeader;