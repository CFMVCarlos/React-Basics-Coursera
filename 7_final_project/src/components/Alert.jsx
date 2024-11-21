import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext"; // Custom context hook to get alert details
import { useRef } from "react"; // Hook to create a reference for cancel button

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  // Accessing the alert context values (isOpen, type, message, onClose)
  const { isOpen, type, message, onClose } = useAlertContext();

  // Reference for the cancel button to manage focus within the alert dialog
  const cancelRef = useRef();

  // Conditional check to determine if the alert is for a success message
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen} // Alert dialog visibility controlled by isOpen state
      leastDestructiveRef={cancelRef} // Sets the least destructive button (e.g., the cancel button) to avoid accidental closing
      onClose={onClose} // Function to close the alert dialog
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
          {/* Dynamic background color based on alert type (green for success, red for error) */}
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {/* Displaying appropriate title based on success or error */}
            {isSuccess ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody>
            {/* Displaying the dynamic alert message */}
            {message}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
