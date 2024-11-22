// Importing CSS file for styling
import "./App.css";

// Importing different components to be used in the App
import Composition from "./components/Composition";
import CustomHook from "./components/CustomHook";
import FetchBtc from "./components/FetchBtc";
import LiveOrders from "./components/LiveOrders";
import MouseLoggerHOC from "./components/MouseLoggerHOC";
import MouseLoggerRender from "./components/MouseLoggerRender";
import NextDay from "./components/NextDay";
import Radio from "./components/Radio";
import RandomUser from "./components/RandomUser";
import Reducer from "./components/Reducer";
import Reference from "./components/Reference";
import Render from "./components/Render";

// Main App component that renders all the components in sequence
function App() {
  return (
    <div>
      {/* Separator between different components */}
      <hr />
      
      {/* Component that fetches and displays Bitcoin data */}
      <FetchBtc />
      
      <hr />
      
      {/* Component that fetches and displays random user data */}
      <RandomUser />
      
      <hr />
      
      {/* Component that demonstrates the use of React's useReducer hook */}
      <Reducer />
      
      <hr />
      
      {/* Component that demonstrates the use of useRef hook */}
      <Reference />
      
      <hr />
      
      {/* Component showcasing the use of custom hooks */}
      <CustomHook />
      
      <hr />
      
      {/* Component that switches between days of the week */}
      <NextDay />
      
      <hr />
      
      {/* Component demonstrating composition and component reuse */}
      <Composition />
      
      <hr />
      
      {/* Component displaying live order details */}
      <LiveOrders />
      
      <hr />
      
      {/* Component using radio buttons for user input */}
      <Radio />
      
      <hr />
      
      {/* Higher-Order Component (HOC) that tracks mouse position */}
      <MouseLoggerHOC />
      
      <hr />
      
      {/* Component using render props to track mouse position */}
      <Render />
      
      <hr />
      
      {/* Another component that tracks mouse position using render props */}
      <MouseLoggerRender />
      
      <hr />
    </div>
  );
}

// Exporting the App component to be used in the entry point of the application
export default App;
