// Button component that renders a button with customizable background color
const Button = ({ children, backgroundColor }) => {
  // Return a button element with a dynamic background color and content (children)
  return <button style={{ backgroundColor }}>{children}</button>;
};

// Alert component that renders an overlay and an alert box with the content passed as children
const Alert = ({ children }) => {
  return (
    <>
      {/* Overlay element that darkens the background when the alert is shown */}
      <div className="Overlay"></div>
      {/* The alert box where the message/content is displayed */}
      <div className="Alert">{children}</div>
    </>
  );
};

// DeleteButton component that renders a red button with the text 'Delete'
const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;  // Use the Button component with a red background color
};

// Composition component that combines all the other components
export default function Composition() {
  return (
    <>
      {/* Header of the page, here it shows the restaurant name */}
      <header>Little Lemon Restaurant 🍕</header>
      
      {/* Alert component displaying the delete account confirmation */}
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to proceed? You will miss all the delicious
          recipes!
        </p>
        {/* DeleteButton component to trigger the delete action */}
        <DeleteButton />
      </Alert>
    </>
  );
}
