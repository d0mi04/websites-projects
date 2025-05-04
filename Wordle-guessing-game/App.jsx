import React, { useState } from "react";
import "./App.css";
import Row from "./Row";

const App = () => {
  const targetWord = "REACT";
  const maxAttempts = 6;

  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value.toUpperCase());
  };

  const handleGuess = () => {
    if (currentGuess.length !== 5) {
      return;
    }

    const updatedGuesses = [...guesses, currentGuess];
    setGuesses(updatedGuesses);

    if (currentGuess === targetWord || updatedGuesses.length >= maxAttempts) {
      setIsGameOver(true);
    }
  };

  return (
    <div className="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <Row key={index} guess={guess} targetWord={targetWord} />
      ))}
      {!isGameOver ? (
        <>
          <input
            onChange={handleInputChange}
            maxLength={targetWord.length}
            placeholder="Enter your guess"
          />
          <button onClick={handleGuess}>Guess</button>
        </>
      ) : (
        currentGuess !== targetWord && <p>Game Over! The word was: {targetWord}</p>
      )}
    </div>
  );
};

export default App;
