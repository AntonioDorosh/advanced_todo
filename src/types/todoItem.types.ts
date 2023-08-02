import {TodoTypes} from "./todo.types.ts";

export type TodoItemProps = {
    todo: TodoTypes[];
    removeTodo: (id: number) => void;
    completedTodo: (id: number) => void;
    editTodo: (id: number, value: string) => void;
}