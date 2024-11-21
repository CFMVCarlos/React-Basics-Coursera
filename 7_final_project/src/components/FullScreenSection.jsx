import * as React from "react"; // Import React to define components
import { VStack } from "@chakra-ui/react"; // Import VStack from Chakra UI for vertical stacking of elements

/**
 * FullScreenSection component: This component is a wrapper that can be used for sections 
 * of the page that require a full-screen height and dynamic styling based on props.
 * It demonstrates the use of the children prop to pass nested elements, and the spread operator to pass additional props.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    // Outer VStack to control the background color dynamically based on the 'isDarkBackground' prop
    <VStack
      backgroundColor={boxProps.backgroundColor} // Set background color using the 'backgroundColor' passed via props
      color={isDarkBackground ? "white" : "black"} // Set text color depending on whether the background is dark or light
    >
      {/* Inner VStack with a max width of 1280px and full screen height */}
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {/* Render the children passed to this component */}
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection; // Export FullScreenSection for use in other parts of the application
