import { createContext, useContext, useState } from "react";

// Creating a context for user data, with a default value of undefined
const UserContext = createContext(undefined);

// UserProvider component that will provide user data to the rest of the app
export const UserProvider = ({children}) => {
  // useState hook to manage user state, with default user data
  const [user] = useState({
    name: "John",  // User's name
    email: "john@example.com",  // User's email
    dob: "01/01/2000",  // User's date of birth
  });

  // Returning the UserContext.Provider with the user data passed as a value
  // This allows all components within the provider to access the user data via context
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Custom hook to access the user data from the UserContext
export const useUser = () => useContext(UserContext);
