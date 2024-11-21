function DessertsList(props) {
  // Filter the data to only include desserts with 500 or fewer calories,
  // sort the desserts by calories in ascending order, and map over the data
  // to generate list items with the dessert name and calories.
  const listItems = props.data
    .filter((dessert) => dessert.calories <= 500)  // Step 1: Filter desserts with calories <= 500
    .sort((a, b) => a.calories - b.calories)  // Step 2: Sort desserts by calories in ascending order
    .map((dessert) => {
      // Create the text for each list item (dessert name and calories)
      const itemText = `${dessert.name} - ${dessert.calories} cal`;
      
      // Return a <li> element for each dessert, using the dessert's name as the key
      return <li key={dessert.name}>{itemText}</li>;
    });

  // Render the list of desserts as an unordered list (<ul>)
  return <ul>{listItems}</ul>;
}

export default DessertsList;
