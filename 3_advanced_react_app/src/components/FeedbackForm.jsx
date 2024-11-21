import React, { useState } from "react";

export default function FeedbackForm() {
  // State hooks for the score (range input) and the comment (textarea input)
  const [score, setScore] = useState(10);  // Default score is set to 10
  const [comment, setComment] = useState("");  // Comment is initially an empty string

  // handleSubmit function is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default form submission behavior (page refresh)

    // Conditional check to ensure that if the score is 5 or less, a comment must be provided
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Please provide a comment explaining why the experience was not satisfactory"
      );  // Alert user to provide more detailed feedback
    }

    // Logs the form data (score and comment) to the console
    console.log("Form submitted with score:", score, "and comment:", comment);
    
    // Reset the state after submission
    setComment("");  // Clears the comment field
    setScore(10);    // Resets the score to the default value of 10
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback form</h2>

        {/* Score input using a range slider */}
        <div className="Field">
          <label htmlFor="range">Score: {score}⭐</label>
          <input
            type="range"
            name="range"
            id="range"
            min="0"  // Minimum value of the range is 0
            max="10"  // Maximum value of the range is 10
            value={score}  // The current value of the score is bound to the state
            onChange={(e) => setScore(e.target.value)}  // Updates the score state when the range changes
          />
        </div>

        {/* Comment input using a textarea */}
        <div className="Field">
          <label htmlFor="textarea">Comment:</label>
          <textarea
            name="textarea"
            id="textarea"
            value={comment}  // The current comment is bound to the state
            onChange={(e) => setComment(e.target.value)}  // Updates the comment state when the user types
          />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
