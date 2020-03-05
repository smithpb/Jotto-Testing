import React from "react";
import PropTypes from "prop-types";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // TODO: update guessedWords
    // TODO: check against secretWord and update succes if needed
    setCurrentGuess("");
  };

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={event => handleSubmit(event)}
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
