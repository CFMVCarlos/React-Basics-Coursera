import * as React from "react";  // Importing React library and components
import "./styles.css";  // Importing the styles for the component

// RadioGroup component that manages a group of radio buttons
export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map to iterate over all child components (RadioOption)
  // and React.cloneElement to clone each RadioOption while injecting the
  // onChange handler and checked state based on the selected value.
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,  // Pass the onChange function to each RadioOption
      checked: selected === child.props.value,  // Check if the option is selected based on its value
    });
  });

  // Return the list of radio options as part of the RadioGroup
  return <div className="RadioGroup">{RadioOptions}</div>;
};

// RadioOption component that represents an individual radio button
export const RadioOption = ({ value, checked, onChange, children }) => {
  // The onChange event handler will be triggered when a radio button is clicked.
  // It calls the onChange prop passed from the parent (RadioGroup) to update the selected value.
  // The checked prop ensures that the correct radio button is selected.
  return (
    <div className="RadioOption">
      <input
        id={value}  // Sets the ID of the radio input for accessibility
        type="radio"  // Specifies that this is a radio button
        name={value}  // Assign the radio buttons the same name so they belong to the same group
        value={value}  // Value of the radio button, passed from the parent
        checked={checked}  // Determines if this radio button is checked
        onChange={(e) => onChange(e.target.value)}  // Calls the onChange handler when clicked
      />
      <label htmlFor={value}>{children}</label>  {/* The label for the radio button */}
    </div>
  );
};
