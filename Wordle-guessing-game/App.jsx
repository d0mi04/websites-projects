import React, { useState } from "react";
import Row from "./Row";
import "./App.css";

const App = () => {
  const targetGuess = "REACT";
  const [guesses, setGuesses] = useState(["PARTY", "DRAFT", "REACT"]);
  return (
    <div class="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <Row key={index} guess={guess} targetWord={targetWord}/>
      ))} 
    </div>
  );
};

export default App;
