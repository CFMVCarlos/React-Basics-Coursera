import React, { useState } from "react";

// ToDo component responsible for rendering a single todo item in a table row
const ToDo = (props) => {
  return (
    <tr>
      <td>
        {/* Displays the ID of the todo item */}
        <label>{props.id}</label>
      </td>
      <td>
        {/* Input field for the user to modify the todo (currently no functionality implemented for this field) */}
        <input type="text" />
      </td>
      <td>
        {/* Displays the creation time of the todo item */}
        <label>{props.createdAt}</label>
      </td>
    </tr>
  );
};

export default function ReverseToDo() {
  // useState hook initializes the todos array with two items
  const [todos, setTodos] = useState([
    {
      id: "todo1",  // ID of the first todo
      createdAt: "18:00",  // Creation time of the first todo
    },
    {
      id: "todo2",  // ID of the second todo
      createdAt: "17:00",  // Creation time of the second todo
    },
  ]);

  // Function to reverse the order of the todos in the list
  const reverseOrder = () => {
    // Reverses the todos array and updates the state
    setTodos([...todos].reverse());  // Copies the todos array and reverses it
  };

  return (
    <div>
      {/* Button to trigger the reversal of the todo list */}
      <button onClick={reverseOrder}>Reverse</button>

      {/* Table to display the list of todos */}
      <table>
        <tbody>
          {/* Maps over the todos array and renders a ToDo component for each todo */}
          {todos.map((todo) => (
            // Each ToDo component receives the todo's id and createdAt as props
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
