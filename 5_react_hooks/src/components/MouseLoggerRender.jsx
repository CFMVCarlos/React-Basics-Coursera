import { useEffect, useState } from "react";

// MousePosition component that tracks mouse position and uses render prop to pass data
const MousePosition = ({ render }) => {
  // useState hook to store the mouse position in x and y coordinates
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // useEffect hook to set up and clean up the mousemove event listener
  useEffect(() => {
    // Function that handles mouse movement and updates the mouse position in state
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position relative to the window
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", handleMousePositionChange);

    // Cleanup: remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Return the render prop and pass the current mouse position to the component
  return render(mousePosition);
};

// PanelMouseLogger component displays mouse position in a panel format
const PanelMouseLogger = () => {
  // Render prop pattern is used to pass mouse position data to the MousePosition component
  return (
    <MousePosition
      render={(data) => (
        <div className="BasicTracker">
          <p>Mouse position:</p>
          <div className="Row">
            <span>x: {data.x}</span>
            <span>y: {data.y}</span>
          </div>
        </div>
      )}
    />
  );
};

// PointMouseLogger component displays mouse position in point format (x, y)
const PointMouseLogger = () => {
  // Render prop pattern is used to pass mouse position data to the MousePosition component
  return (
    <MousePosition
      render={(data) => (
        <p>
          ({data.x}, {data.y})
        </p>
      )}
    />
  );
};

// Main component that renders both mouse position trackers (Panel and Point)
export default function MouseLoggerRender() {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕 Render</header>
      {/* Render both the PanelMouseLogger and PointMouseLogger components */}
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}
