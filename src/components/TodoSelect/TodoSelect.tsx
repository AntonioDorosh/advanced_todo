import React from 'react';
import {
    TodoOptionStyled,
    TodoSelectStyled
} from "./TodoSelect.styled.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";

const TodoSelect = () => {
    const { filter, setFilter } = useMainTodo();

    return (
        <>
            <TodoSelectStyled value={filter}
                    onChange={(event) => setFilter(event.target.value)}>
                <TodoOptionStyled value="All">All</TodoOptionStyled>
                <TodoOptionStyled value="Pending">Pending</TodoOptionStyled>
                <TodoOptionStyled value="Completed">Completed</TodoOptionStyled>
            </TodoSelectStyled>
        </>
    );
};

export default TodoSelect;