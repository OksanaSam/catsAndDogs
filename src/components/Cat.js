import React from "react";

/**
 * Functional react component for cat item
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component
 */

const Cat = ( props ) => {
  return (
    <div data-test="component-cat" className="card">
      <h3>Cat Quote</h3>
      {/* <p>{item.text}</p> */}
      <p>Upvotes - {props.item.upvotes}</p>
    </div>
  );
};

export default Cat;
