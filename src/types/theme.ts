import React from "react";

export enum Mode {
    Light = 'light',
    Dark = 'dark'
}

export type ThemeProviderProps = {
    children: React.ReactNode
}

export type Theme = {
    colors: {
        background: string;
        text: string;
    }
}

export interface ThemeContext {
    changeMode: (mode: Mode) => void;
    mode: Mode;
}