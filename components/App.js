import React from "react";
import movies from "./components/movies";


function App() {
  return (
    <header className="my-app">
  <div>
  <h1>Now Showing</h1>
  <div className="movies">
  <h2>Kalki</h2>
  <p>Time: 10AM</p>
  <p>Seats: 60</p>
  </div>
  {movies.map(copy =>{
    return(
      <div className="container"></div>
    )
  })}
  </div>
  </div>
  );
  }