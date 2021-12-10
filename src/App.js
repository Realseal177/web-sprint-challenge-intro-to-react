import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import StarWars from "./components/Character";
import Details from "./components/Details";
import styled from "styled-components";

const StyledChars = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchChars = () => {
      axios
        .get(`https://swapi.dev/api/people`)
        .then((resp) => {
          //console.log(resp.data);
          setCharacters(resp.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(console.log("It's working!!"));
    };
    fetchChars();
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledChars className="App">
      <h1 className="Header">Characters</h1>
      {
      characters.map((char, index) => {
      return <StarWars key={index} id={index + 1} info={char}/>
      })
      }
    </StyledChars>
  );
};

export default App;
