import React, { useEffect, useState } from "react";

export default function FetchBtc() {
  // useState hook to manage the state of btcData, initially set to an empty object
  const [btcData, setBtcData] = useState({});

  // useEffect hook to fetch the Bitcoin data when the component mounts (empty dependency array means it runs only once)
  useEffect(() => {
    // Fetch the data from the CoinDesk API
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json()) // Convert the response to JSON
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) // Extract the USD data from the response and set it to btcData
      .catch((error) => console.error(error)); // Catch and log any errors if the fetch fails
  }, []); // Empty dependency array means the effect runs only once when the component mounts

  return (
    <>
      {/* Display the current BTC/USD data */}
      <h1>Current BTC/USD data</h1>
      {/* Conditionally render BTC data */}
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
}
