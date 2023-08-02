import React, {FormEvent} from 'react';
import {
    TodoFormButton,
    TodoFormInput,
    TodoFormLabel,
    TodoFormStyled
} from "./TodoForm.styled.tsx";
import {useTodo} from "../../context/TodoInputValue.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";

const TodoForm = () => {

    const {inputValue, setInputValue, onChangeHandler} = useTodo();
    const { addTodo } = useMainTodo();
    const addTodoHandler = (event: FormEvent<HTMLFormElement>) => {
        addTodo(event, inputValue)
        setInputValue('');
    }

    return (
        <TodoFormStyled onSubmit={addTodoHandler}>
            <TodoFormLabel>New Task:</TodoFormLabel>
            <TodoFormInput type="text" placeholder="Add todo" value={inputValue}
                           onChange={onChangeHandler}/>
            <TodoFormButton type="submit">Add Task</TodoFormButton>
        </TodoFormStyled>
    );
};

export default TodoForm;