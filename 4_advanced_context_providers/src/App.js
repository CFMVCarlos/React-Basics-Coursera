import "./App.css";  // Importing CSS styles for the app
import { ThemeProvider, useTheme } from "./ThemeContext";  // Importing custom theme context and hook
import Switch from "./Switch";  // Importing the Switch component to toggle themes

// Title component that changes color based on the current theme
const Title = ({ children }) => {
  const { theme } = useTheme();  // Using the useTheme hook to access the current theme
  return (
    <h2
      style={{
        // Sets the text color based on the current theme
        color: theme === "light" ? "black" : "white",  // Light theme: black text, Dark theme: white text
      }}
    >
      {children}  {/* Render the title text passed as children */}
    </h2>
  );
};

// Paragraph component that changes color based on the current theme
const Paragraph = ({ children }) => {
  const { theme } = useTheme();  // Using the useTheme hook to access the current theme
  return (
    <p
      style={{
        // Sets the text color based on the current theme
        color: theme === "light" ? "black" : "white",  // Light theme: black text, Dark theme: white text
      }}
    >
      {children}  {/* Render the paragraph text passed as children */}
    </p>
  );
};

// Content component that holds the main body text
const Content = () => {
  return (
    <div>
      {/* Render a paragraph with content */}
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

// Header component that renders the page title and the theme switch
const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>  {/* Display the app title with the theme-based color */}
      <Switch />  {/* The Switch component allows the user to toggle the theme */}
    </header>
  );
};

// Page component that contains the main page content
const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>  {/* Display another title */}
      <Content />  {/* Display the content section */}
    </div>
  );
};

// The main App component which applies the current theme to the background
function App() {
  const { theme } = useTheme();  // Using the useTheme hook to access the current theme
  return (
    <div
      className="App"
      style={{
        // Sets the background color based on the current theme
        backgroundColor: theme === "light" ? "white" : "black",  // Light theme: white background, Dark theme: black background
      }}
    >
      <Header />  {/* Render the header */}
      <Page />  {/* Render the main page */}
    </div>
  );
}

// The Root component that wraps the entire app inside the ThemeProvider
function Root() {
  return (
    <ThemeProvider>  {/* Provide the theme context to the whole app */}
      <App />  {/* Render the main app */}
    </ThemeProvider>
  );
}

export default Root;  // Export Root component as the default export
