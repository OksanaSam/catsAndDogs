import React, { useState } from "react";
// import { usePaginatedQuery } from "react-query";
import { useQuery } from "react-query";
import Dog from "./Dog";

const fetchDogs = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  return res.json();
};

const Dogs = () => {
  const { data, status } = useQuery("breeds", fetchDogs);

  return (
    <div>
      <h2>Dog Breeds</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && data.message ? (
        <div>
          {Object.keys(data.message).map((breed, index) => (
            <Dog key={index} breed={breed} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dogs;

// const fetchDogs = async (key, page) => {
//   const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
//   return res.json();
// };

// const Dogs = () => {
//   const [page, setPage] = useState(1);
//   const { resolvedData, latestData, status } = usePaginatedQuery(
//     ["planets", page],
//     fetchPlanets
//   );

//   return (
//     <div>
//       <h2>Planets</h2>

//       {status === "loading" && <div>Loading data</div>}

//       {status === "error" && <div>Error fetching data</div>}

//       {status === "success" && (
//         <>
//           <button
//             onClick={() => setPage((old) => Math.max(old - 1, 1))}
//             disabled={page === 1}
//           >
//             Previous Page
//           </button>
//           <span>{page}</span>
//           <button
//             onClick={() =>
//               setPage((old) =>
//                 !latestData || !latestData.next ? old : old + 1
//               )
//             }
//             disabled={!latestData || !latestData.next}
//           >
//             Next page
//           </button>
//           <div>
//             {resolvedData.results.map((planet) => (
//               <Planet key={planet.name} planet={planet} />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Planets;
