import {FormEvent} from "react";
import {TodoTypes} from "./todo.types.ts";

export type TodoContextTypes = {
    addTodo: (event: FormEvent<HTMLFormElement>, value: string) => void;
    removeTodo: (id: number) => void;
    completedTodo: (id: number, isDone: boolean) => void;
    editTodo: (id: number, value: string) => void;
    todos: TodoTypes[];
    todoCounter: number;
}