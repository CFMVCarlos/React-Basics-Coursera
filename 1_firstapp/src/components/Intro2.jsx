import React from "react";

// Define the Intro2 component as a functional component
function Intro2() {
  return (
    <div className="blog-post-intro">
      {/* Heading displaying the blog post title */}
      <h2>What's the best way to style your React apps?</h2>
      <div>
        {/* Paragraph describing the content of the blog post */}
        <p>
          In this blog post, I'll list 10 reasons why I love to work as a
          front-end developer.
        </p>
        {/* Paragraph with a link-style text for "Read more" */}
        {/* The className "link" suggests this text could be styled like a clickable link */}
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

// Export the Intro2 component for use in other parts of the application
export default Intro2;
