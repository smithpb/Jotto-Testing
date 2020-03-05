import React from "react";
import "./App.css";
import Guessedwords from "./GuessedWords";
import Congrats from "./Congrats";

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Guessedwords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
