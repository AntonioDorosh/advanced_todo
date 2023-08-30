import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {TodoProvider} from "./context/TodoInputValue.tsx";
import {MainTodoProvider} from "./context/TodoContext.tsx";
import {AppThemeProvider} from "./theme";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppThemeProvider>
            <MainTodoProvider>
                <TodoProvider>
                    <App/>
                </TodoProvider>
            </MainTodoProvider>
        </AppThemeProvider>
    </React.StrictMode>,
)
