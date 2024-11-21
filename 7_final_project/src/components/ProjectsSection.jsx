import React from "react"; // Import React library
import FullScreenSection from "./FullScreenSection"; // Import FullScreenSection component for layout
import { Box, Heading } from "@chakra-ui/react"; // Import Chakra UI components (Box and Heading)
import Card from "./Card"; // Import the Card component to display individual projects

// Array of projects with details including title, description, and image source function
const projects = [
  {
    title: "React Space", // Project title
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", // Project description
    getImageSrc: () => require("../images/photo1.jpg"), // Function to get the image source for the project
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

// ProjectsSection component that displays the list of featured projects
const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d" // Set the background color for the section
      isDarkBackground // Apply dark background styling to the section
      p={8} // Padding for the section
      alignItems="flex-start" // Align items to the start (top) of the section
      spacing={8} // Set spacing between children elements
    >
      <Heading as="h1" id="projects-section"> {/* Section title for Featured Projects */}
        Featured Projects
      </Heading>
      <Box
        display="grid" // Use grid layout to display projects
        gridTemplateColumns="repeat(2,minmax(0,1fr))" // Set up two-column grid layout
        gridGap={8} // Set the gap between grid items
      >
        {/* Iterate over the projects array and render a Card for each project */}
        {projects.map((project) => (
          <Card
            key={project.title} // Use project title as the unique key for each Card
            title={project.title} // Pass the project title to the Card component
            description={project.description} // Pass the project description to the Card component
            imageSrc={project.getImageSrc()} // Pass the image source function to the Card component
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection; // Export the ProjectsSection component for use in other parts of the application
