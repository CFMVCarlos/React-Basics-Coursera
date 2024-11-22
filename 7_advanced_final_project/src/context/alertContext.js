import { createContext, useContext, useState } from "react"; // Import necessary hooks and context creation utilities

// Create a Context for managing the alert state (open/close, type, message)
const AlertContext = createContext(undefined);

// AlertProvider component that wraps the app and provides alert state management
export const AlertProvider = ({ children }) => {
  // State to store the alert's visibility (isOpen), type (success/error), and message
  const [state, setState] = useState({
    isOpen: false, // Whether the alert is open or closed
    type: 'success', // Type of alert: either 'success' or 'error'
    message: '', // Message content of the alert
  });

  return (
    // The AlertContext.Provider provides the current alert state and methods to open/close the alert
    <AlertContext.Provider
      value={{
        ...state, // Spread the current alert state into the context value
        onOpen: (type, message) => setState({ isOpen: true, type, message }), // Method to open the alert with a specific type and message
        onClose: () => setState({ isOpen: false, type: '', message: '' }), // Method to close the alert and reset the state
      }}
    >
      {children} {/* Render the child components that will have access to the alert context */}
    </AlertContext.Provider>
  );
};

// Custom hook to access the AlertContext and its value from any component
export const useAlertContext = () => useContext(AlertContext);
