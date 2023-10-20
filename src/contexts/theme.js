import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const LangContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [es, setEng] = useState(false);

  const toggleLang = () => {
    setEng(!es);
  };
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider value={[isDark, toggleTheme]}>
      <LangContext.Provider value={[es, toggleLang]}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};
