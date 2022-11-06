import { createContext, useState } from "react";

export const  ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true)

    const toggleTheme = ()=>{
        setIsDark(!isDark)
    }
    return(
        <ThemeContext.Provider value={[ isDark, toggleTheme ]}>{children}</ThemeContext.Provider>
    )
}
