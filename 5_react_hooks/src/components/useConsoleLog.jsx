import { useEffect } from "react";

// Custom hook that logs a variable's value to the console
export default function useConsoleLog(varName) {
  // useEffect hook that runs when the 'varName' value changes
  useEffect(() => {
    // Logs the current value of 'varName' to the console
    console.log(varName);
  }, [varName]); // Dependency array: re-run this effect whenever 'varName' changes
}
