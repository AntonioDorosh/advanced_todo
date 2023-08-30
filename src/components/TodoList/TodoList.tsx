import React, {useState} from 'react';
import {
    SpanStyled, ThemeButton,
    TodoListContainer,
    TodoListTitle
} from "./TodoList.styled.tsx";
import TodoForm from "../TodoForm/TodoForm.tsx";
import Todo from "../Todo/Todo.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";
import TodoSelect from "../TodoSelect/TodoSelect.tsx";
import {useAppTheme} from "../../theme";
import {Mode} from "../../types/theme.ts";
import {BsSunFill} from "react-icons/bs";
import {FaMoon} from "react-icons/fa6";

const TodoList = () => {
    const {todos} = useMainTodo();
    const [filter, setFilter] = useState('All');
    const {mode, changeMode} = useAppTheme();


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

    const toggleTheme = () => changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light);


    return (
        <TodoListContainer>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                marginBlockEnd: '1rem'
            }}>
                <TodoListTitle>Todo List <SpanStyled color={'green'}
                                                     todos={todos}>{filteredTodo.length}
                </SpanStyled>
                </TodoListTitle>
                <ThemeButton onClick={toggleTheme}>{mode === Mode.Light ?
                    <BsSunFill size={20}/> :
                    <FaMoon size={20}/>}
                </ThemeButton>
            </div>
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