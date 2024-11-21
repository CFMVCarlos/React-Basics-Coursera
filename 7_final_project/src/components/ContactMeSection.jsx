import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react"; // Chakra UI components for form and layout
import { useFormik } from "formik"; // Formik library for form handling and validation
import React, { useEffect } from "react"; // React library for functional components and hooks
import * as Yup from "yup"; // Yup for form validation schema
import { useAlertContext } from "../context/alertContext"; // Custom context for alert handling
import useSubmit from "../hooks/useSubmit"; // Custom hook for submitting the form data
import FullScreenSection from "./FullScreenSection"; // Custom component for the full-screen section layout

/**
 * LandingSection component renders the contact form with form validation and submission.
 */
const LandingSection = () => {
  // Destructure the response and loading state from the useSubmit hook
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext(); // Use alert context to show alerts

  // Effect hook to show alert and reset form after successful submission
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message); // Trigger alert with the response message and type
      if (response.type === "success") {
        formik.resetForm(); // Reset the form on success
      }
    }
  }, [response]); // Run the effect whenever the response changes

  // Initialize Formik for form management and validation
  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "", comment: "" }, // Default form values
    onSubmit: (values) => {
      submit("/api/contact", values); // Call the custom submit function when form is submitted
    },
    validationSchema: Yup.object({
      // Validation schema using Yup
      firstName: Yup.string().required("Required"), // Name is required
      email: Yup.string().required("Required").email("Invalid email address"), // Email is required and must be valid
      type: Yup.string(), // Type is optional
      comment: Yup.string()
        .required("Required") // Comment is required
        .min(25, "Must be at least 25 characters"), // Comment must be at least 25 characters long
    }),
  });

  return (
    // FullScreenSection component that fills the screen with a background
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8" // Purple background color
      py={16}
      spacing={8}
    >
      {/* VStack for aligning content in a vertical stack with padding */}
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        {/* Box to wrap the form with padding and rounded corners */}
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}> {/* Submit form using Formik's handleSubmit */}
            {/* VStack to arrange form fields vertically with spacing */}
            <VStack spacing={4}>
              {/* FormControl for the Name input field with error handling */}
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")} // Bind Formik field props to input
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> {/* Show error message if validation fails */}
              </FormControl>

              {/* FormControl for the Email input field with error handling */}
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email" // Set input type to email
                  {...formik.getFieldProps("email")} // Bind Formik field props to input
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> {/* Show error message if validation fails */}
              </FormControl>

              {/* FormControl for the enquiry type dropdown */}
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")} // Bind Formik field props to select
                  _focus={{ color: "black" }} // Custom focus style for the select element
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              {/* FormControl for the comment textarea field with error handling */}
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")} // Bind Formik field props to textarea
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> {/* Show error message if validation fails */}
              </FormControl>

              {/* Submit button */}
              <Button
                type="submit"
                colorScheme="purple" // Use purple color scheme for the button
                width="full" // Full width for the button
                isLoading={isLoading} // Show loading spinner when form is submitting
                loadingText="Submitting..." // Loading text
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
