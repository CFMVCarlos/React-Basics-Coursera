import "./App.css";  // Importing the styles for the app
import ComplexForm from "./components/ComplexForm";  // Importing the ComplexForm component
import ControlledForm from "./components/ControlledForm";  // Importing the ControlledForm component
import DessertsList from "./components/DessertList";  // Importing the DessertsList component
import FeedbackForm from "./components/FeedbackForm";  // Importing the FeedbackForm component
import ToDo from "./components/ReverseToDo";  // Importing the ToDo component
import { useUser } from "./components/UserContext";  // Importing the custom hook to access the user context

// Sample data for desserts
const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",  // Random image URL
    price: "$5.00",
  },
  {
    id: "2",
    title: "Cheesecake",
    description: "The best cheesecake in town",
    image: "https://picsum.photos/200/300/?random",  // Random image URL
    price: "$4.00",
  },
  {
    id: "3",
    title: "Chocolate Cake",
    description: "The best chocolate cake in town",
    image: "https://picsum.photos/200/300/?random",  // Random image URL
    price: "$3.00",
  },
];

// Sample data for desserts with nutritional info and creation date
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

// Mapping the dessert data to create a new structure for display purposes
const topDesserts = data.map((dessert) => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  };
});

export default function App() {
  // Logging the transformed data to the console for debugging
  console.log(topDesserts);

  // Mapping the desserts data to create list items for displaying dessert titles and prices
  const listItems = data.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li key={dessert.title}>{itemText}</li>;
  });

  // Using the custom hook to access the user data from context
  const user = useUser();

  return (
    <div>
      <h1>Examine the console output</h1>
      {/* Displaying the list of desserts with their names and prices */}
      <ul>{listItems}</ul>
      <hr />
      {/* Passing the desserts data to the DessertsList component to display */}
      <DessertsList data={desserts} />
      <hr />
      {/* Displaying the ToDo component */}
      <ToDo />
      <hr />
      {/* Displaying the ControlledForm component */}
      <ControlledForm />
      <hr />
      {/* Displaying the FeedbackForm component */}
      <FeedbackForm />
      <hr />
      {/* Displaying the ComplexForm component */}
      <ComplexForm />
      <hr />
      {/* Displaying the user data (name, email, date of birth) from the context */}
      <p>{`${user.name} - ${user.email} - ${user.dob}`}</p>
    </div>
  );
}
