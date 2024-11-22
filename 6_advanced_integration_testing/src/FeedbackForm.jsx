import React, { useState } from "react";

export default function FeedbackForm({ onSubmit }) {
  // State to store the score (rating) from 0 to 10
  const [score, setScore] = useState(10);
  
  // State to store the user's comment
  const [comment, setComment] = useState("");

  // Disable the submit button if score is less than 5 and comment is too short
  const isDisabled = Number(score) < 5 && comment.length <= 10;

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit behavior

    // If the score is less than or equal to 5 and the comment is too short, prompt for a longer comment
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Please provide a comment explaining why the experience was not satisfactory"
      );
    }

    // Log the score and comment when the form is submitted
    console.log("Form submitted with score:", score, "and comment:", comment);

    // Reset the form inputs after submission
    setComment("");
    setScore(10);

    // Call the onSubmit function passed as a prop with the current score and comment
    onSubmit({ score, comment });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback form</h2>

        {/* Score input (range slider) */}
        <div className="Field">
          <label htmlFor="range">Score: {score}⭐</label>
          <input
            type="range"
            name="range"
            id="range"
            min="0"
            max="10"
            value={score}
            // Update the score state when the user adjusts the range slider
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        {/* Comment input (textarea) */}
        <div className="Field">
          <label htmlFor="textarea">Comment:</label>
          <textarea
            name="textarea"
            id="textarea"
            value={comment}
            // Update the comment state when the user types in the textarea
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Submit button, disabled if conditions are not met */}
        <button disabled={isDisabled} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
