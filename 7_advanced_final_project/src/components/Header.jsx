import { Box, HStack } from "@chakra-ui/react"; // Import Box and HStack components from Chakra UI for layout styling
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"; // Import social media icons from FontAwesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the envelope icon for email
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component to display the icons
import React, { useEffect, useRef, useState } from "react"; // Import React hooks

// Social media links with corresponding icons
const socials = [
  {
    icon: faEnvelope, // Envelope icon for email
    url: "mailto: cfmvcarlos@gmail.com", // Email link
  },
  {
    icon: faGithub, // GitHub icon
    url: "https://github.com/CFMVCarlos", // GitHub URL
  },
  {
    icon: faLinkedin, // LinkedIn icon
    url: "https://www.linkedin.com/in/carlosfmv/", // LinkedIn URL
  },
  {
    icon: faMedium, // Medium icon
    url: "https://medium.com", // Medium URL
  },
  {
    icon: faStackOverflow, // StackOverflow icon
    url: "https://stackoverflow.com", // StackOverflow URL
  },
];

const Header = () => {
  // handleClick function to smooth scroll to different sections of the page
  const handleClick =
    (anchor, offset = 100) =>
    () => {
      const id = `${anchor}-section`; // Generate the section ID
      const element = document.getElementById(id); // Find the element by ID
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY; // Get the position of the section
        const offsetPosition = elementPosition - offset; // Calculate position with an offset

        // Smooth scroll to the section
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Smooth scrolling
        });
      }
    };

  const prevScrollY = useRef(window.scrollY); // Track the previous scroll position
  const [translateY, setTranslateY] = useState("translateY(0)"); // State to control translation on scroll

  // handleScroll function to adjust header visibility based on scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY; // Get current scroll position
    if (currentScrollY > prevScrollY.current) {
      // If scrolling down, hide the header
      console.log("scrolling down");
      setTranslateY("translateY(-200px)"); // Move the header up
    } else {
      // If scrolling up, show the header again
      setTranslateY("translateY(0)"); // Reset header position
    }
    prevScrollY.current = currentScrollY; // Update the previous scroll position
  };

  // Set up and clean up the scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
    };
  }, [prevScrollY]);

  return (
    // Fixed position header with smooth transitions
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      style={{
        transform: translateY, // Apply translation on scroll
        transitionProperty: "transform", // Smooth transition for translation
        transitionDuration: ".7s", // Transition duration
        transitionTimingFunction: "ease-in-out", // Ease-in-out timing function for smooth animation
        backgroundColor: "#18181b", // Dark background color
        zIndex: 1000, // Ensure header stays on top
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto"> {/* Centered content with max-width */}
        <HStack
          px={16}
          py={4}
          justifyContent="space-between" // Space between social media icons and navigation
          alignItems="center"
        >
          {/* Social media icons */}
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => (
                <a key={social.url} href={social.url} alt="Social Media Icons">
                  <FontAwesomeIcon icon={social.icon} size="2x" /> {/* Render each social icon */}
                </a>
              ))}
            </HStack>
          </nav>

          {/* Navigation links */}
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}> {/* Scroll to projects section */}
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}> {/* Scroll to contact section */}
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header; // Export Header component
