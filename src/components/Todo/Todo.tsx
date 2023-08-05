import React, {FormEvent, useState} from 'react';
import {
    TodoButtonStyled,
    TodoEditButton,
    TodoInput,
    TodoItemButton,
    TodoItemCheck,
    TodoItemTitle,
    TodoItemUl,
    TodoStyled
} from "./Todo.styled.tsx";
import {AiFillEdit} from "react-icons/ai";
import {BiCheck, BiTrash} from "react-icons/bi";
import {TodoFormStyled} from "../TodoForm/TodoForm.styled.tsx";
import {useMainTodo} from "../../context/TodoContext.tsx";
import {TodoTypes} from "../../types/todo.types.ts";

type TodoProps = {
    todo: TodoTypes;
}

const Todo = ({todo}: TodoProps) => {

    const {removeTodo, completedTodo, editTodo} = useMainTodo();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [textValue, setTextValue] = useState<string>('');

    const toggleForm = () => {
        setIsEdit(!isEdit)
        setTextValue('')  
    };

    const handleUpdateTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editTodo(todo.id, textValue);
        toggleForm();
        setTextValue('');
    }

    return (
        <TodoStyled>
            {isEdit ? (
                <>
                    <TodoFormStyled onSubmit={handleUpdateTodo}>
                        <TodoInput
                            onChange={(event) => setTextValue(event.target.value)}
                            value={textValue}
                            type="text" placeholder={'edit task here'}/>
                        <TodoButtonStyled>Save</TodoButtonStyled>
                        <TodoButtonStyled
                            onClick={toggleForm}>Cancel</TodoButtonStyled>
                    </TodoFormStyled>
                </>
            ) : (
                <TodoItemUl>
                    <div>

                        <TodoItemTitle title={todo.title} id={todo.id}
                                       completed={todo.completed}
                                       time={todo.time}>{todo.title}</TodoItemTitle>
                        <span>{todo.time}</span>
                    </div>
                    <li>
                        <TodoEditButton
                            onClick={toggleForm}><AiFillEdit/></TodoEditButton>
                        <TodoItemCheck
                            onClick={() => completedTodo(todo.id, todo.completed)}><BiCheck/></TodoItemCheck>
                        <TodoItemButton
                            onClick={() => removeTodo(todo.id)}><BiTrash/></TodoItemButton>
                    </li>
                </TodoItemUl>
            )}
        </TodoStyled>
    );
};

export default Todo;