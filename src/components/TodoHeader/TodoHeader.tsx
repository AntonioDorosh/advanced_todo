import React from 'react';
import {TodoHeaderContainer} from "./TodoHeader.styled.tsx";
import {
    SpanStyled,
    ThemeButton,
    TodoListTitle
} from "../TodoList/TodoList.styled.tsx";
import {Mode} from "../../types/theme.ts";
import {BsSunFill} from "react-icons/bs";
import {FaMoon} from "react-icons/fa6";
import {useMainTodo} from "../../context/TodoContext.tsx";
import {useAppTheme} from "../../theme";

const TodoHeader = () => {
    const {todos, filteredTodo} = useMainTodo();
    const {mode, changeMode} = useAppTheme();

    const toggleTheme = () => changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light);


    return (
        <TodoHeaderContainer>
                <TodoListTitle>Todo List <SpanStyled color={'green'}
                                                     todos={todos}>{filteredTodo.length}
                </SpanStyled>
                </TodoListTitle>
                <ThemeButton onClick={toggleTheme}>{mode === Mode.Light ?
                    <BsSunFill size={20}/> :
                    <FaMoon size={20}/>}
                </ThemeButton>
            <nav>
            </nav>
        </TodoHeaderContainer>
    );
};

export default TodoHeader;