import React from "react";

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
