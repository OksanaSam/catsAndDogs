import React from "react";

const Dog = ({ breed }) => {
  return (
    <div className="card">
      <h3>{breed}</h3>
    </div>
  );
};

export default Dog;
