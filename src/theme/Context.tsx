import React, {createContext, useContext, useState} from "react";
import {Mode, Theme, ThemeContext, ThemeProviderProps} from "../types/theme.ts";
import {DarkTheme, LightTheme} from "./Themes.ts";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles.tsx";

const AppThemeContext = createContext({
    changeMode: () => {
    },
    mode: Mode.Light
} as ThemeContext);
export const useAppTheme = () => useContext(AppThemeContext);
export const AppThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(LightTheme);
    const [mode, setMode] = useState<Mode>(Mode.Light);

    const changeMode = (mode: Mode) => {
        setTheme(mode === Mode.Light ? LightTheme : DarkTheme)
        setMode(mode)
    };

    return (
        <AppThemeContext.Provider value={{mode, changeMode}}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};
