import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TodoProvider} from "./context/TodoInputValue.tsx";
import {MainTodoProvider} from "./context/TodoContext.tsx";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    *,
    *:before,
    *:after {
     margin: 0;
     padding: 0;
     border: 0;
     box-sizing: border-box;
    }
    body {
      background: linear-gradient(90deg, rgba(0,21,36,1) 0%, rgba(241,241,241,1) 100%, rgba(255,236,212,1) 100%);
      font-family: 'Roboto', sans-serif;
    }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainTodoProvider>
            <TodoProvider>
                <Global/>
                <App/>
            </TodoProvider>
        </MainTodoProvider>
    </React.StrictMode>,
)
