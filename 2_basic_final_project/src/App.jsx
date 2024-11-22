import { useRef, useState } from "react";
import "./App.css";

function App() {
  // useRef is used to reference the input field without causing re-renders
  const inputRef = useRef(null);

  // States to hold the result of calculations and the input value
  const [result, setResult] = useState(0); // Result of the calculations
  const [inputValue, setInputValue] = useState(""); // Current value typed in the input field

  // Function to perform calculations
  function calculate(e, operator) {
    e.preventDefault(); // Prevents form submission behavior

    // Convert the input value to a number
    const value = Number(inputValue);

    // Check if division by zero is attempted and display an alert
    if (operator === "/" && value === 0) {
      alert("Cannot divide by zero");
      return; // Exit early if division by zero is attempted
    }

    // Update the result based on the operator (+, -, *, /)
    setResult((prevResult) => {
      switch (operator) {
        case "+":
          return prevResult + value; // Add the value to the result
        case "-":
          return prevResult - value; // Subtract the value from the result
        case "*":
          return prevResult * value; // Multiply the result by the value
        case "/":
          return prevResult / value; // Divide the result by the value
        default:
          return prevResult; // Default case, if no valid operator
      }
    });
  }

  // Function to reset the input field
  function resetInput(e) {
    e.preventDefault(); // Prevents form submission behavior
    setInputValue(""); // Clear the input field
  }

  // Function to reset the result to zero
  function resetResult(e) {
    e.preventDefault(); // Prevents form submission behavior
    setResult(0); // Reset result to zero
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1> {/* Display title */}
      </div>
      <form>
        {/* Input field for entering the number, controlled by state */}
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update inputValue state on change
          type="number" // Restrict input type to numbers
          placeholder="Type a number" // Placeholder text
          ref={inputRef} // Reference to the input field (can be used for focus or other actions)
          style={{display: "inline-block"}}
        />

        <span>{result}</span> {/* Display the current result */}
        
        
        <div>
          {/* Buttons for different operations */}
          <button onClick={(e) => calculate(e, "+")}>Add</button>
          <button onClick={(e) => calculate(e, "-")}>Subtract</button>
          <button onClick={(e) => calculate(e, "*")}>Multiply</button>
          <button onClick={(e) => calculate(e, "/")}>Divide</button>
        
        
          {/* Buttons to reset the input or result */}
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
