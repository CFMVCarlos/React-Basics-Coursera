import React, { useEffect, useState } from "react";

// DataFetcher is a reusable component that fetches data and passes it to the render prop
const DataFetcher = ({ url, render }) => {
  // State to store the fetched data (default is an empty array)
  const [data, setData] = useState([]);

  // useEffect hook to simulate fetching data based on the URL
  useEffect(() => {
    // If the URL contains 'desserts', set mock dessert data
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      // Otherwise, set mock drink data
      setData(["water", "soda", "juice"]);
    }
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Return the render function with the fetched data as an argument
  return render(data);
};

// Component to display the count of desserts by using DataFetcher
const DessertsCount = () => {
  return (
    // Pass URL and render function to DataFetcher to display dessert count
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

// Component to display the count of drinks by using DataFetcher
const DrinksCount = () => {
  return (
    // Pass URL and render function to DataFetcher to display drink count
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  );
};

export default function Render() {
  return (
    <div>
      {/* Header for the page */}
      <header>Little Lemon Restaurant 🍕</header>
      {/* Render the count of desserts and drinks */}
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}
