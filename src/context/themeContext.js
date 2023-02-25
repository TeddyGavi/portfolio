import { useState, createContext } from "react";

export const themeContext = createContext(null);

export default function ThemeProvider() {
  const [theme, setTheme] = useState(false);

  const value = { theme, setTheme };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
