import React, { useState, useEffect } from "react";

import "./styles.css";
import axios from "axios";

// you DC'd from Hangouts -- Ian

export default function App() {
  const [pokedata, setPokeData] = useState({});
  // useState[]
  const pokedoxURL = "https://pokeapi.co/api/v2/pokemon/100";

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get(pokedoxURL).then((response) => {
      console.log(response);
      // pokedata = response

      setPokeData(response.data.data);
    });
  }, []);

  return (
    pokedata.id && (
      <div className="App">
        <div className="pokedox">
          <div className="flexBox">
            <div className="flexItem">
              <div className="Icon">Display Icon</div>
            </div>
            <div className="flexItem">
              <div className="details">
                Details
                <div className="detail"> ID : {pokedata.id}</div>
                <div className="detail"> Name</div>
                <div className="detail"> Property 3</div>
                <div className="detail"> Property 4</div>
                <div className="detail"> Property 5 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
