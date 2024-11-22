import React, { useEffect, useState } from "react";

// Higher-Order Component (HOC) that provides mouse position to the wrapped component
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    // State to store mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // useEffect hook to add event listener for mouse movement
    useEffect(() => {
      // Function to update the mouse position in state
      const handleMousePositionChange = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

      // Add event listener for mousemove event to track mouse position
      window.addEventListener("mousemove", handleMousePositionChange);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []); // Empty dependency array ensures this effect runs only once

    // Pass the mouse position as a prop to the WrappedComponent
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// PanelMouseLogger component that displays the mouse position in a panel format
const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null; // Return null if no mouse position is available
  }

  return (
    <div>
      <p>Mouse position:</p>
      <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

// PointMouseLogger component that displays the mouse position in point format (x, y)
const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null; // Return null if no mouse position is available
  }

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

// Create two components wrapped by the withMousePosition HOC
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

// Main MouseLoggerHOC component that renders the wrapped components
export default function MouseLoggerHOC() {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕 HOC</header>
      {/* Render both wrapped components */}
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}
