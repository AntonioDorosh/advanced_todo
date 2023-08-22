import React from 'react';
import {
    TodoOptionStyled,
    TodoSelectStyled
} from "./TodoSelect.styled.tsx";

type TodoSelectProps = {
    filter: string;
    setFilter: (value: string) => void;
}

const TodoSelect = ({filter, setFilter}: TodoSelectProps) => {
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