// Importing CSS for styling the App
import "./App.css";

// Importing the FeedbackForm component
import FeedbackForm from "./FeedbackForm";

function App() {
  // handleSubmit function to be triggered when the form is submitted
  const handleSubmit = () => {
    console.log("Form Submited"); // Log message on form submission
  };

  return (
    <div className="App">
      {/* Link to the Little Lemon restaurant website */}
      <a href="https://littlelemon.com" className="App-link">
        Little Lemon Restaurant
      </a>

      {/* Horizontal line separating the content */}
      <hr />

      {/* Feedback form component with onSubmit handler */}
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

// Exporting the App component to be used in the entry point of the application
export default App;
