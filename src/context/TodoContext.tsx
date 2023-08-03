import React, {
    createContext,
    FC,
    FormEvent,
    ReactNode,
    useContext,
    useState
} from "react";
import {TodoTypes} from "../types/todo.types.ts";
import {TodoContextTypes} from "../types/todocontext.types.ts";

const MainTodoContext = createContext({} as TodoContextTypes);
export const useMainTodo = () => useContext(MainTodoContext);
export const MainTodoProvider: FC<{
    children?: ReactNode | undefined
}> = ({children}) => {
    const [todos, setTodos] = useState<TodoTypes[]>([]);

    console.log(todos, 'todos');

    const addTodo = (event: FormEvent<HTMLFormElement>, value: string) => {
        event.preventDefault();

        if (!value.trim()) return alert('Please enter a value')

        const newTask = {
            id: todos.length + 1,
            title: value,
            completed: false
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
        todos
    };

    return (
        <MainTodoContext.Provider value={mainTodoValues}>
            {children}
        </MainTodoContext.Provider>
    );
};
