import React from "react";
import { useQuery } from "react-query";
import Cat from "./Cat";

const fetchCats = async () => {
  const res = await fetch("https://cat-fact.herokuapp.com/facts/");
  return res.json();
};

const Cats = () => {
  const { data, status } = useQuery("cats", fetchCats);

  return (
    <div>
      <h2>Cat Facts</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && data ? (
        <div>
          {data.all.map((item) => (
            <Cat key={item._id} item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Cats;
