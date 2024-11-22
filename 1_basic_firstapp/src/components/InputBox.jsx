import { useState } from "react";

// Define the InputComponent as a functional component
export default function InputComponent() {
  // Declare a state variable 'inputText' and the setter function 'setText'
  // The initial value is set to "hello"
  const [inputText, setText] = useState("hello");

  // Event handler for input change
  function handleChange(e) {
    // Update the state with the new input value whenever the user types
    setText(e.target.value);
  }

  return (
    <>
      {/* Input field where the user can type */}
      {/* The value of the input is controlled by the 'inputText' state */}
      {/* The onChange event updates the state whenever the user types */}
      <input value={inputText} onChange={handleChange} />

      {/* Display the text the user has typed */}
      <p>You typed: {inputText}</p>

      {/* Button to reset the input field to the initial value ("hello") */}
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}
