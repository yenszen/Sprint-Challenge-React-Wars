import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterInfo from "./components/CharacterInfo";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    console.log("characters", characters),
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map((item, index) => {
        return <CharacterInfo key={index} name={item.name} height={item.height} homeworld={item.homeworld} />
      })}
    </div>
  );
}

export default App;
