import React from "react";

const Dog = ({ dog }) => {
  return (
    <div className="card">
      <h3>{dog.breeds[0].name}</h3>
      <h4>Temperament: {dog.breeds[0].temperament}</h4>
      <h5>Bred for: {dog.breeds[0].bred_for}</h5>
      <img src={dog.url} alt={dog.breeds[0].name} />
    </div>
  );
};

export default Dog;
