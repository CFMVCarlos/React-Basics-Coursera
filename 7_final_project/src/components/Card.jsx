import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; // Chakra UI components for layout and styling
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // FontAwesome icon for the arrow
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesomeIcon component to render icons
import React from "react"; // React library for building the component

/**
 * Card component that displays a title, description, and an image with a "See more" link and an arrow icon.
 */
const Card = ({ title, description, imageSrc }) => {
  // Card component receives 'title', 'description', and 'imageSrc' as props.

  return (
    <VStack bg="white" color="black" rounded="xl"> 
      {/* VStack is a vertical stack container that holds the content of the card */}
      <Image src={imageSrc} width="100%" rounded="inherit" />
      {/* Display the image at the top of the card with full width, rounded corners */}

      <VStack align="flex-start" p={4}>
        {/* VStack to align content to the left and provide padding around the content */}
        <Heading size="md">{title}</Heading>
        {/* Heading component to display the title with medium size */}
        
        <Text color="#777">{description}</Text>
        {/* Text component for the description with a gray color for a softer tone */}
        
        <HStack width="100%" justifyContent="flex-start">
          {/* HStack to align the "See more" text and icon horizontally */}
          <Text>See more</Text>
          {/* Text for the "See more" label */}
          
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
          {/* FontAwesome icon representing an arrow pointing right */}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
