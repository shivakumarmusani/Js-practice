import React from "react";
import {movie} from "./components/data";

function App() {
  return (
    <div className="App">
    
      <header className="my-app">
      <a class="btn btn-primary" href="www.google.com" role="button">Link</a>
      <button class="btn btn-primary" type="submit">Button</button>
      <input class="btn btn-primary" type="button" value="Input" />
      <input class="btn btn-primary" type="submit" value="Submit" />
      <input class="btn btn-primary" type="reset" value="Reset"></input>

        <p>hi this my app
        </p>
        <h1>hello world</h1>
      </header>
      <div >
            {movie.map(copy =>{
                return(
                    <div className="container" >
                   <h1 key={"id"}>{copy.id}</h1>
                   <h1> {copy.name}</h1>  
                   </div>
                )
            })}
        </div>
    </div>
  );
}

export default App;