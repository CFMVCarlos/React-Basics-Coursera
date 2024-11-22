import { Avatar, Heading, VStack } from "@chakra-ui/react"; // Import necessary components from Chakra UI
import React from "react"; // Import React library
import FullScreenSection from "./FullScreenSection"; // Import FullScreenSection component

// Static text values for greeting and bio
const greeting = "Hello, I am Carlos!"; // Greeting message
const bio1 = "A trainee frontend developer"; // First part of the bio
const bio2 = "specialised in React"; // Second part of the bio

// LandingSection component that renders a fullscreen section with a greeting and bio
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center" // Center content horizontally
    alignItems="center" // Center content vertically
    isDarkBackground // Apply dark background styling to the section
    backgroundColor="#2A4365" // Set background color to a dark blue shade
    spacing={12} // Set spacing between the children components
  >
    <VStack> {/* Vertical stack for the greeting */}
      <Avatar src={require("../images/Imagem_Perfil_Cara.png")} boxSize="300px" /> {/* Display avatar image */}
      <Heading size="lg" fontWeight="medium"> {/* Display greeting text */}
        {greeting}
      </Heading>
    </VStack>
    <VStack> {/* Vertical stack for the bio */}
      <Heading size="2xl">{bio1}</Heading> {/* Display first part of the bio */}
      <Heading size="2xl">{bio2}</Heading> {/* Display second part of the bio */}
    </VStack>
  </FullScreenSection>
);

export default LandingSection; // Export the LandingSection component
