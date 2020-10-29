import React from "react";

/**
 * Functional react component for dog item
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component
 */

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
