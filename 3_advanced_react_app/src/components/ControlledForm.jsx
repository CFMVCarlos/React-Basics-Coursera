import React, { useState } from "react";

// ControlledForm component
export default function ControlledForm() {
  // State to manage the input value for the 'name' field
  const [name, setName] = useState("");  // Initially empty string

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default form submission behavior (refresh)
    
    // Clear the input field by resetting the 'name' state
    setName("");
    
    // Log a message to the console indicating the form was submitted
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>  {/* Attach handleSubmit function to the form submission */}
      <fieldset>
        <div className="Field">  {/* Container for each input field */}
          <label htmlFor="name">Name:</label>  {/* Label for the input field */}
          
          {/* Controlled input field for the 'name' */}
          <input
            id="name"  // Associating the label with the input
            type="text"  // Specifies that the input will be text
            name="name"  // Name attribute for form data
            placeholder="Name"  // Placeholder text when the input is empty
            value={name}  // Bind input value to the 'name' state
            onChange={(e) => setName(e.target.value)}  // Update 'name' state on input change
          />
        </div>
        
        {/* Submit button */}
        <button disabled={!name} type="submit">  {/* Disable submit button if name is empty */}
          Submit
        </button>
      </fieldset>
    </form>
  );
}
