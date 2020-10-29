import React from "react";

/**
 * Functional react component for cat item
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component
 */

const Cat = ({ item }) => {
  return (
    <div className="card">
      <h3>Cat Quote</h3>
      <p> {item.text}</p>
      <p>Upvotes - {item.upvotes}</p>
    </div>
  );
};

export default Cat;
