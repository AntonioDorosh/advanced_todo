import React from 'react';
import {TodoListContainer} from "./TodoList.styled.tsx";
import TodoForm from "../TodoForm/TodoForm.tsx";
import Todo from "../Todo/Todo.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";
import TodoSelect from "../TodoSelect/TodoSelect.tsx";
import TodoHeader from "../TodoHeader/TodoHeader.tsx";

const TodoList = () => {
    const {todos, filteredTodo} = useMainTodo();


    return (
        <TodoListContainer>
            <TodoHeader/>
            <TodoSelect/>
            {!todos.length ?
                <h2 style={{marginBlockEnd: '2rem'}}>Todo list is
                    empty</h2> : filteredTodo.map((todo) => <Todo
                    todo={todo}/>)}
            <TodoForm/>
        </TodoListContainer>
    );
};

export default TodoList;