import {ChangeEvent} from "react";

export type TodoInputContextTypes = {
    inputValue: string;
    setInputValue: (text: string) => void;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}