import React, {useState} from "react";

const ThemeContext = React.createContext({});

export function ThemeContextProvider({children}){
  const [isDarkMode, setTheme] = useState(true);

  return <ThemeContext.Provider value={{isDarkMode, setTheme}}>
    {children}
  </ThemeContext.Provider>;
}

export default ThemeContext;