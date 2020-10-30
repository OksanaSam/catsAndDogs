import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Dog from "./Dog";

/**
 * @function
 * @param {number} - page number
 * @returns {object}
 */

const fetchDogs = async (page) => {
  const res = await fetch(
    `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=5`
  );
  return res.json();
};

/**
 * Functional react component for dogs list
 * @function
 * @param none
 * @returns {JSX.Element} - Rendered component
 */

const Dogs = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["moredogs", page],
    fetchDogs
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
        </div>
      ) : null}
    </div>
  );
};

export default Dogs;
