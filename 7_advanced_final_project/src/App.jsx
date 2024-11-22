import { ChakraProvider } from "@chakra-ui/react"; // Chakra UI Provider to make Chakra components available throughout the app
import Header from "./components/Header"; // Importing the Header component
import LandingSection from "./components/LandingSection"; // Importing the LandingSection component
import ProjectsSection from "./components/ProjectsSection"; // Importing the ProjectsSection component
import ContactMeSection from "./components/ContactMeSection"; // Importing the ContactMeSection component
import Footer from "./components/Footer"; // Importing the Footer component
import { AlertProvider } from "./context/alertContext"; // Importing the AlertProvider from context for managing alert state
import Alert from "./components/Alert"; // Importing the Alert component to display alert messages

function App() {
  return (
    // ChakraProvider makes Chakra UI components and theme available to the entire app
    <ChakraProvider>
      {/* AlertProvider is used to manage alert states and provide them to the components */}
      <AlertProvider>
        <main>
          {/* Header component typically contains the navigation and branding of the site */}
          <Header />
          
          {/* LandingSection component usually contains introductory content or hero section */}
          <LandingSection />
          
          {/* ProjectsSection component lists featured projects or portfolio items */}
          <ProjectsSection />
          
          {/* ContactMeSection component displays a way for users to contact */}
          <ContactMeSection />
          
          {/* Footer component typically contains copyright information or additional links */}
          <Footer />
          
          {/* Alert component to display success or error messages to the user */}
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
