import { createContext, useContext, useState } from "react";  // Importing necessary React functions

// Create a new context for the theme, initialized as undefined
const ThemeContext = createContext(undefined);

// ThemeProvider component that provides the theme state and toggle function to the app
export const ThemeProvider = ({ children }) => {
  // Declare state for the theme, with "light" as the default value
  const [theme, setTheme] = useState("light");

  // Define the context value which includes the current theme and a function to toggle the theme
  const themeValue = {
    theme: theme,  // Current theme (either "light" or "dark")
    toggleTheme: () => {
      // Toggle between "light" and "dark" theme
      setTheme(theme === "light" ? "dark" : "light");
    },
  };

  // Provide the theme context value to the children of ThemeProvider
  return (
    <ThemeContext.Provider value={themeValue}>
      {children}  {/* The children components will have access to the theme context */}
    </ThemeContext.Provider>
  );
};

// useTheme hook that allows other components to consume the theme context
export const useTheme = () => useContext(ThemeContext);  // Returns the current theme context value
