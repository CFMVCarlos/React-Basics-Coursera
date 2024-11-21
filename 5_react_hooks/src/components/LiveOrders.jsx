import React from "react";

// Row component to display its children with optional spacing between them
const Row = ({ children, spacing }) => {
  // Style to apply margin to each child element, except the first one
  const childStyle = { marginLeft: `${spacing}px` };

  return (
    <div className="Row">
      {/* Map over the children of the Row component, adding margin to all but the first child */}
      {React.Children.map(children, (child, index) => {
        // For each child, clone the element and add the spacing style
        return React.cloneElement(child, {
          style: {
            ...child.props.style, // Preserve existing styles
            ...(index > 0 ? childStyle : {}), // Apply marginLeft to all but the first child
          },
        });
      })}
    </div>
  );
};

// LiveOrders component displaying a list of orders using the Row component
export default function LiveOrders() {
  return (
    <div>
      {/* Use Row component with 32px spacing between each child element */}
      <Row spacing={32}>
        {/* Order details: pizza name, quantity, price, time, and customer name */}
        <span>Pizza Margarita</span>
        <span>2</span>
        <span>30$</span>
        <span>18:30</span>
        <span>John</span>
      </Row>
    </div>
  );
}
