import React from "react";

// Define the Btn component as a functional component
const Btn = () => {
  // Event handler function for mouse over event
  const mouseOverHandler = () => {
    console.log("Mouse over"); // Logs a message when the mouse hovers over the button
  };

  // Event handler function for click event
  const clickHandler = () => {
    console.log("Clicked"); // Logs a message when the button is clicked
  };

  // Return a button element with both mouseOver and click event listeners
  return (
    <button onMouseOver={mouseOverHandler} onClick={clickHandler}>
      Click me
    </button>
  );
};

export default Btn;
