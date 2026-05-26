import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

//custom hook
// 1. Abstraction: Instead of useContext(ThemeContext) in every component, just use useTheme()
// 3. Reusability: Single source of truth - if context structure changes, update only here
// 4. Best practice: Custom hooks are standard in React for accessing context
export default function useTheme() {
  return useContext(ThemeContext);
}
