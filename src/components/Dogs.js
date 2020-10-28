import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
// import { useQuery } from "react-query";
import Dog from "./Dog";

const fetchMoreDogs = async (key, page) => {
  const res = await fetch(
    `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=5`
  );
  return res.json();
};

// const fetchDogs = async () => {
//   const res = await fetch("https://dog.ceo/api/breeds/list/all");
//   return res.json();
// };

const Dogs = () => {
  // const { data, status } = useQuery("breeds", fetchDogs);

  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["moredogs", page],
    fetchMoreDogs
  );

  return (
    <div>
      <h2>Dog Breeds</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" ? (
        <div>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button onClick={() => setPage((old) => old + 1)}>Next page</button>
          <div>
            {resolvedData.map((dog) => (
              <Dog key={dog.id} dog={dog} />
            ))}
          </div>
          {/* {Object.keys(data.message).map((breed, index) => (
            <Dog key={index} breed={breed} />
          ))} */}
        </div>
      ) : null}
    </div>
  );
};

export default Dogs;
