import {TodoTypes} from "../types/todo.types.ts";

const removeFromLS = () => {
    localStorage.removeItem('todos');
};

const addToLocalStorage = (arrayTodos: TodoTypes[]) => {
    localStorage.setItem('todos', JSON.stringify(arrayTodos));
}

export  {removeFromLS, addToLocalStorage};