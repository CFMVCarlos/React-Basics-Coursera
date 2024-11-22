import React, { useReducer } from "react";

// Reducer function that manages the state changes based on different actions
const reducer = (state, action) => {
  // Action to decrease money by 10 when buying ingredients
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  
  // Action to increase money by 10 when selling a meal
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  
  // Action to increase money by 5000 when becoming a celebrity chef
  if (action.type === "celebrity") return { money: state.money + 5000 };
  
  // If action type doesn't match any case, return the current state unchanged
  return state;
};

export default function Reducer() {
  // Initial state with a starting amount of money
  const initialState = { money: 100 };

  // useReducer hook: takes the reducer function and the initial state
  // It returns the current state and the dispatch function to send actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* Display the current amount of money in the wallet */}
      <h1>Wallet: {state.money}</h1>
      <div>
        {/* Button to buy ingredients, dispatches the "buy_ingredients" action */}
        <button
          onClick={() => {
            dispatch({ type: "buy_ingredients" });
          }}
        >
          Shopping for veggies!
        </button>
        
        {/* Button to sell a meal, dispatches the "sell_a_meal" action */}
        <button
          onClick={() => {
            dispatch({ type: "sell_a_meal" });
          }}
        >
          Serve a meal to the customer
        </button>

        {/* Button to become a celebrity chef, dispatches the "celebrity" action */}
        <button
          onClick={() => {
            dispatch({ type: "celebrity" });
          }}
        >
          Celebrity chef!
        </button>
      </div>
    </>
  );
}
