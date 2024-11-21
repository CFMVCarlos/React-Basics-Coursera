import React from "react";

// Define the Intro1 component as a functional component
function Intro1() {
  return (
    <div className="blog-post-intro">
      {/* Heading displaying the main title */}
      <h2>I've become a React developer!</h2>
      <div>
        {/* Paragraph describing the achievement */}
        <p>
          I've completed the React Basics course and I'm happy to announce that
          I'm now a Junior React Developer!
        </p>
        {/* Paragraph with a link style for "Read more" */}
        {/* The className "link" can be used to style this text like a link */}
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

// Export the Intro1 component to be used in other parts of the application
export default Intro1;
