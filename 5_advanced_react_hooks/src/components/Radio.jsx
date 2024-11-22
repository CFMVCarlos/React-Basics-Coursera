import { useState } from "react";
import { RadioGroup, RadioOption } from "./Radio/index";

// Radio component to collect user input on how they heard about Little Lemon
export default function Radio() {
  // State to store the currently selected radio button value
  const [selected, setSelected] = useState("");

  return (
    <div>
      {/* Title of the question */}
      <h2>How did you hear about Little Lemon?</h2>

      {/* RadioGroup component to group all RadioOption components */}
      <RadioGroup onChange={setSelected} selected={selected}>
        {/* Individual RadioOption components for the choices */}
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>

      {/* Submit button that is disabled until a radio option is selected */}
      <button disabled={!selected}>Submit</button>
    </div>
  );
}
