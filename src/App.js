import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  let [page, setPage] = useState("dogs");

  return (
    <>
      <div className="App">
        <h1>Pet Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">{page === "dogs" ? <Dogs /> : <Cats />}</div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
