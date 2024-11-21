import { useId, useState } from "react";
import { validateEmail } from "../utils"; // Assuming a utility function to validate email format

// Error message component for password validation
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

// Error message component for email validation
const EmailErrorMessage = () => {
  return <p className="FieldError">Not a valid email format</p>;
};

function ComplexForm() {
  // States for managing form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  // Generating unique IDs for form inputs using useId hook (useful for label association)
  const firstNameID = useId();
  const lastNameID = useId();
  const emailID = useId();
  const passwordID = useId();
  const roleID = useId();

  // State for controlling error messages visibility
  const [displayEmailError, setDisplayEmailError] = useState(false);
  const [displayPasswordError, setDisplayPasswordError] = useState(false);

  // Function to check if the form is valid
  const getIsFormValid = () => {
    // Check if all required fields are valid
    if (firstName.length === 0) return false;
    if (!validateEmail(email)) return false;
    if (password.value.length < 8) return false;
    if (role === "role") return false;
    return true; // Return true if all fields are valid
  };

  // Function to reset the form fields
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  // Submit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert("Account created!"); // Show alert on successful form submission
    clearForm(); // Clear form after submission
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          {/* First name input field */}
          <div className="Field">
            <label htmlFor={firstNameID}>
              First name <sup>*</sup>
            </label>
            <input
              id={firstNameID}
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} // Update first name state
            />
          </div>

          {/* Last name input field */}
          <div className="Field">
            <label htmlFor={lastNameID}>Last name</label>
            <input
              id={lastNameID}
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // Update last name state
            />
          </div>

          {/* Email input field */}
          <div className="Field">
            <label htmlFor={emailID}>
              Email address <sup>*</sup>
            </label>
            <input
              id={emailID}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              onFocus={() => setDisplayEmailError(false)} // Hide error message on focus
              onBlur={(e) => {
                setDisplayEmailError(
                  !!e.target.value.length && !validateEmail(e.target.value) // Validate email on blur
                );
              }}
            />
            {displayEmailError && <EmailErrorMessage />} {/* Show email error message if invalid */}
          </div>

          {/* Password input field */}
          <div className="Field">
            <label htmlFor={passwordID}>
              Password <sup>*</sup>
            </label>
            <input
              id={passwordID}
              type={password.isTouched ? "password" : "text"} // Toggle password visibility based on focus
              placeholder="Password"
              value={password.value}
              onChange={(e) => {
                setPassword({
                  ...password,
                  value: e.target.value, // Update password value
                  isTouched: true, // Mark the password field as touched
                });
              }}
              onFocus={() => {
                setDisplayPasswordError(false); // Hide password error message on focus
              }}
              onBlur={(e) => {
                setDisplayPasswordError(e.target.value.length < 8); // Check password length on blur
              }}
            />
            {displayPasswordError && <PasswordErrorMessage />} {/* Show password error message if invalid */}
          </div>

          {/* Role selection field */}
          <div className="Field">
            <label htmlFor={roleID}>
              Role <sup>*</sup>
            </label>
            <select
              id={roleID}
              value={role}
              onChange={(e) => setRole(e.target.value)} // Update role state
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Submit button, disabled if the form is not valid */}
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ComplexForm;
