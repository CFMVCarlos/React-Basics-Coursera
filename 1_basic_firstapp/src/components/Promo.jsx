import React from "react";

// Promotional section component
function Promo() {
  return (
    // Main container for the promotional section
    <div className="promo-section">
      {/* Title of the promotion */}
      <div>
        <h1>Don't miss this deal!</h1>
      </div>
      {/* Description or offer details */}
      <div>
        <h2>
          Subscribe to my newsletter and get all the shop items at 50% off!
        </h2>
      </div>
    </div>
  );
}

export default Promo;
