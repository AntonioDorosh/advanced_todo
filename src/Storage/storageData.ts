import {TodoTypes} from "../types/todo.types.ts";

const removeFromLocalStorage = () => {
    localStorage.removeItem('todos');
};

const addToLocalStorage = (arrayTodos: TodoTypes[]) => {
    localStorage.setItem('todos', JSON.stringify(arrayTodos));
}

export {removeFromLocalStorage, addToLocalStorage};