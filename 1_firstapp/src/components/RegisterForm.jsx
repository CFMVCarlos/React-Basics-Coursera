import { useState } from "react";

export default function RegisterForm() {
  // Initializing the form state with default values for each field
  const [form, setForm] = useState({
    firstName: "Luke",  // Default first name
    lastName: "Jones",  // Default last name
    email: "lukeJones@sculpture.com",  // Default email
  });

  // Function to handle input changes and update the respective field in the form
  const handleInputChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,  // Dynamically update the form field
    });
  };

  return (
    <>
      {/* Input field for First Name */}
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={handleInputChange("firstName")}
        />
      </label>

      {/* Input field for Last Name */}
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={handleInputChange("lastName")}
        />
      </label>

      {/* Input field for Email */}
      <label>
        Email:
        <input
          value={form.email}
          onChange={handleInputChange("email")}
        />
      </label>

      {/* Displaying the form values */}
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
