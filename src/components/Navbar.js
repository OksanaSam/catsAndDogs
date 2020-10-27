import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("dogs")}>Dogs</button>
      <button onClick={() => setPage("cats")}>Cats</button>
    </nav>
  );
};

export default Navbar;
