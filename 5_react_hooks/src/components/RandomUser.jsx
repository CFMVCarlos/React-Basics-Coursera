import React, { useEffect, useState } from "react";

// RandomUser component to fetch and display random user data
export default function RandomUser() {
  // State to hold the user data fetched from the API, initially set to an empty array
  const [user, setUser] = useState([]);

  // Function to fetch random user data from the API
  const fetchData = () => {
    // Fetch data from the random user API
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => setUser(data)); // Set the fetched data to the user state
  };

  // useEffect hook to fetch the data when the component mounts (only once, as [] is passed as the dependency)
  useEffect(() => {
    fetchData(); // Call fetchData to get the random user data
  }, []);

  // Conditional rendering: If user data is available, display it; otherwise, show "Data pending..."
  return Object.keys(user).length ? (
    <div>
      {/* Header indicating data has been returned */}
      <h1>Data returned</h1>

      {/* Display the first and last name of the user */}
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>

      {/* Display the user's profile picture */}
      <img src={user.results[0].picture.large} alt="Profile" />
    </div>
  ) : (
    // If no user data, show a loading message
    <h1>Data pending...</h1>
  );
}
