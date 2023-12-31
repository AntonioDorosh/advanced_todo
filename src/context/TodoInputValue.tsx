import React, {
    ChangeEvent,
    createContext,
    FC,
    ReactNode,
    useContext,
    useState
} from "react";

type TodoInputContextTypes = {
    inputValue: string;
    setInputValue: (text: string) => void;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TodoValueContext = createContext({} as TodoInputContextTypes);
export const useTodo = () => useContext(TodoValueContext);
export const TodoProvider: FC<{
    children?: ReactNode | undefined
}> = ({children}) => {
    const [inputValue, setInputValue] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    const todoValues = {
        inputValue,
        setInputValue,
        onChangeHandler
    };

    return (
        <TodoValueContext.Provider value={todoValues}>
            {children}
        </TodoValueContext.Provider>
    );
};
