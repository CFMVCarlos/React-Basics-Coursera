import { useTheme } from "../ThemeContext";  // Importing the custom hook to access theme context
import "./Styles.css";  // Importing the styles for the switch component

// Switch component for toggling between light and dark themes
const Switch = () => {
  // Using the custom hook to access the current theme and the function to toggle the theme
  const { theme, toggleTheme } = useTheme();

  return (
    // Label acts as a container for the switch input element
    <label className="switch">
      {/* Checkbox input for toggling the theme */}
      <input
        type="checkbox"
        checked={theme === "light"}  // If the theme is 'light', the checkbox will be checked
        onChange={toggleTheme}  // Calls the toggleTheme function when the checkbox is clicked
      />
      {/* Span element represents the visual slider part of the switch */}
      <span className="slider round" />
    </label>
  );
};

export default Switch;
