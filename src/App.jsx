import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { loading, response } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h2>Get some data</h2>

      {loading ? (
        "Loading..."
      ) : (
        <textarea rows="10" cols="50">
          {JSON.stringify(response)}
        </textarea>
      )}
    </>
  );
}

export default App;
