import React, {useState} from 'react';
import {
    SpanStyled,
    TodoListContainer,
    TodoListTitle
} from "./TodoList.styled.tsx";
import TodoForm from "../TodoForm/TodoForm.tsx";
import Todo from "../Todo/Todo.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";
import TodoSelect from "../TodoSelect/TodoSelect.tsx";

const TodoList = () => {
    const {todos} = useMainTodo();
    const [filter, setFilter] = useState('All');

    const filteredTodo = todos.filter((todo) => {
        switch (filter) {
            case 'All':
                return todo;
            case 'Completed':
                return todo.completed;
            case 'Pending':
                return !todo.completed;
            default:
                return todo;
        }
    });

    return (
        <TodoListContainer>
            <TodoListTitle>Todo List <SpanStyled color={'green'}
                                                 todos={todos}>{filteredTodo.length}
            </SpanStyled>
            </TodoListTitle>
            <TodoSelect filter={filter} setFilter={setFilter}/>
            {!todos.length ?
                <h2 style={{marginBlockEnd: '2rem'}}>Todo list is
                    empty</h2> : filteredTodo.map((todo) => <Todo
                    todo={todo}/>)}
            <TodoForm/>
        </TodoListContainer>
    );
};

export default TodoList;