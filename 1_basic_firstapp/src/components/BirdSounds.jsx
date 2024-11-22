import React from "react";

function BirdSound() {
  // Initialize two Audio objects with bird sound URLs
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );
  
  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  // Function to toggle play/pause for the first bird sound
  function toggle1() {
    if (bird1.paused) {
      bird1.play();  // If the sound is paused, play it
    } else {
      bird1.pause(); // If the sound is playing, pause it
    }
  }

  // Function to toggle play/pause for the second bird sound
  function toggle2() {
    if (bird2.paused) {
      bird2.play();  // If the sound is paused, play it
    } else {
      bird2.pause(); // If the sound is playing, pause it
    }
  }

  return (
    <div>
      {/* Buttons to control the respective bird sound */}
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default BirdSound;
