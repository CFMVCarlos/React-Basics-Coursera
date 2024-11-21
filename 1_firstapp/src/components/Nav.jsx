import React from "react";

// Navigation component
function Nav() {
  return (
    // Main navigation container
    <nav className="main-nav">
      {/* Unordered list of navigation items */}
      <ul>
        {/* Each list item represents a navigation link */}
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
