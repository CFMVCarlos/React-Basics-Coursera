import React from "react"; // React library for building UI components
import { Box, Flex } from "@chakra-ui/react"; // Chakra UI components for layout and styling

/**
 * Footer component that renders a footer section with centered content.
 */
const Footer = () => {
  return (
    // Box component that serves as the wrapper for the footer section with a background color
    <Box backgroundColor="#18181b">
      <footer>
        {/* Flex container for centering the content horizontally and vertically */}
        <Flex
          margin="0 auto" // Center the Flex container horizontally
          px={12} // Add horizontal padding for spacing
          color="white" // Set text color to white
          justifyContent="center" // Center the content horizontally within the Flex container
          alignItems="center" // Center the content vertically within the Flex container
          maxWidth="1024px" // Set a maximum width for the container
          height={16} // Set the height of the footer
        >
          {/* Footer text with copyright information */}
          <p>Carlos Valente • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer; // Export the Footer component to be used elsewhere
