import React, {createContext, FormEvent, useContext, useState} from "react";
import {TodoTypes} from "../types/todo.types.ts";
import {TodoPropsProvider} from "../types/theme.ts";
import {FilterTypes} from "../types/filter.types.ts";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";

type TodoContextTypes = {
    addTodo: (event: FormEvent<HTMLFormElement>, value: string) => void;
    removeTodo: (id: number) => void;
    completedTodo: (id: number, isDone: boolean) => void;
    editTodo: (id: number, value: string) => void;
    todos: TodoTypes[];
    filteredTodo: TodoTypes[];
    filter: FilterTypes;
    setFilter: (value: string) => void;
}

const MainTodoContext = createContext({} as TodoContextTypes);
export const useMainTodo = () => useContext(MainTodoContext);
export const MainTodoProvider = ({children}: TodoPropsProvider) => {
    const [todos, setTodos] = useLocalStorage<TodoTypes[]>(
        'todos',
        []
    );
    const [filter, setFilter] = useState<FilterTypes>(FilterTypes.All);

    const filteredTodo = todos.filter((todo) => {
        switch (filter) {
            case FilterTypes.All:
                return todo;
            case FilterTypes.Completed:
                return todo.completed;
            case FilterTypes.Pending:
                return !todo.completed;
            default:
                return todo;
        }
    });


    const addTodo = (event: FormEvent<HTMLFormElement>, value: string) => {
        event.preventDefault();
        const currentTime = new Date().toLocaleTimeString();

        if (!value.trim()) return alert('Please enter a value')

        const newTask = {
            id: todos.length + 1,
            title: value,
            completed: false,
            time: currentTime
        };

        setTodos([...todos, newTask]);
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const completedTodo = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {
            ...todo,
            completed: !todo.completed
        } : todo))
    }

    const editTodo = (id: number, value: string) => {
        const updatedTodo = todos.map((todo) => todo.id === id ? {
            ...todo,
            title: value,
        } : todo);

        setTodos(updatedTodo);
    }


    const mainTodoValues = {
        addTodo,
        removeTodo,
        completedTodo,
        editTodo,
        todos,
        filteredTodo,
        filter,
        setFilter
    };

    // todo fix setFilter

    return (
        <MainTodoContext.Provider value={mainTodoValues}>
            {children}
        </MainTodoContext.Provider>
    );
};
