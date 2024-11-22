import React, { useRef } from "react";

export default function Reference() {
  // Create a ref using useRef hook, initially set to null
  const formInputRef = useRef(null);

  // Function to focus the input field when called
  const focusInput = () => {
    // Access the DOM node of the input element using formInputRef
    formInputRef.current.focus();
  };

  return (
    <>
      {/* Heading explaining the functionality of the component */}
      <h1>Using useRef to access underlying DOM</h1>
      
      {/* Input field with a ref attached to it */}
      <input ref={formInputRef} type="text" />
      
      {/* Button that triggers the focusInput function when clicked */}
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}
