import { useEffect, useRef, useState } from "react";

// NextDay component that displays the current day and the previous day
export default function NextDay() {
  // State to hold the current day, initialized to "Monday"
  const [day, setDay] = useState("Monday");
  
  // usePrevious hook is used to track the previous day's value
  const prevDay = usePrevious(day);

  // Function to determine the next day and update the 'day' state
  const getNextDay = () => {
    // Update the state based on the current day
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* Display the current day */}
      <h1>
        Today is: {day}
        <br />
        {/* If there is a previous day, display it */}
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      {/* Button that triggers the getNextDay function to update the day */}
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

// usePrevious custom hook to track and return the previous value of a given variable
function usePrevious(val) {
  // useRef is used to persist the previous value of 'val' across re-renders
  const ref = useRef(null);

  // useEffect hook to update the ref with the new value whenever 'val' changes
  useEffect(() => {
    ref.current = val;
  }, [val]); // Runs only when 'val' changes

  // Return the previous value of 'val' (stored in the ref)
  return ref.current;
}
