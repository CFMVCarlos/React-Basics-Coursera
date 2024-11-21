import { useState } from "react";

// Helper function to simulate a delay (e.g., an API call delay) by using a promise
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom hook to simulate form submission and an API call.
 * The hook uses Math.random() to simulate a 50% chance of success or failure.
 */
const useSubmit = () => {
  // State to track if the form submission is in progress
  const [isLoading, setLoading] = useState(false);
  
  // State to store the response (success or error message)
  const [response, setResponse] = useState(null);

  /**
   * Function to simulate submitting data to an API.
   * This function generates a random success or failure response.
   * 
   * @param {string} url - The URL to submit the data to (unused in this mock function).
   * @param {object} data - The data to be submitted (used to personalize the success message).
   */
  const submit = async (url, data) => {
    const random = Math.random(); // Generate a random number to simulate success or failure
    setLoading(true); // Set loading state to true, indicating that the form is being submitted

    try {
      // Simulate a delay (e.g., waiting for an API response)
      await wait(2000);
      
      // Simulate a success or failure based on the random value
      if (random < 0.5) {
        // Simulate an error (failure case)
        throw new Error("Something went wrong");
      }

      // Set the response state to a success message if no error occurred
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      // Set the response state to an error message if something went wrong
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      // Set loading to false once the submission process is completed
      setLoading(false);
    }
  };

  // Return the current loading state, response, and the submit function for external usage
  return { isLoading, response, submit };
};

export default useSubmit;
