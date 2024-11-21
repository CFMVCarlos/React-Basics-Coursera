import React, { useState } from "react";

const ModeToggler = () => {
  // Use React's useState hook to manage darkModeOn state
  const [darkModeOn, setDarkModeOn] = useState(true);

  // JSX elements for dark and light modes
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  // Function to toggle the mode between dark and light
  function handleClick() {
    setDarkModeOn((prevMode) => !prevMode); // Toggle the mode and update state
  }

  return (
    <div>
      {/* Display darkMode or lightMode based on the state */}
      {darkModeOn ? darkMode : lightMode}
      {/* Button to trigger the mode toggle */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ModeToggler;
