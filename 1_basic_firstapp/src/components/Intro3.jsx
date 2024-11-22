import React from "react";

// Define the Intro3 component as a functional component using arrow function syntax
const Intro3 = () => {
  return (
    <div className="blog-post-intro">
      {/* Heading displaying the blog post title */}
      <h2>Why I love front-end web development</h2>
      <div>
        {/* Paragraph introducing the content of the post */}
        <p>
          There are so many options to choose from. Here's a high level overview
          of the popular ones.
        </p>
        {/* Paragraph with a link-style text for "Read more" */}
        {/* The className "link" is likely intended to style this text like a clickable link */}
        <p className="link">Read more...</p>
      </div>
    </div>
  );
};

// Export the Intro3 component for use in other parts of the application
export default Intro3;
