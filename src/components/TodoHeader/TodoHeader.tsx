import React from 'react';
import {
    TodoHeaderContainer,
    TodoHeaderList,
    TodoHeaderListItem
} from "./TodoHeader.styled.tsx";

const TodoHeader = () => {

    return (
        <TodoHeaderContainer>
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