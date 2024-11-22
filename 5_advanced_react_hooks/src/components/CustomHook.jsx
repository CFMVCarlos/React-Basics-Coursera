import React, { useState } from "react";
// Importing a custom hook useConsoleLog that will log the count value to the console
import useConsoleLog from "./useConsoleLog";

export default function CustomHook() {
  // useState hook to create a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);
  
  // Custom hook useConsoleLog will log the value of 'count' to the console
  useConsoleLog(count);

  // Function to increment the count by 1 when called
  function increment() {
    setCount((prevCount) => prevCount + 1); // Updates the 'count' state
  }

  return (
    <div>
      {/* Display the current count value */}
      <h1>Count: {count}</h1>
      {/* Button to trigger the increment function on click */}
      <button onClick={increment}>Plus 1</button>
    </div>
  );
}
