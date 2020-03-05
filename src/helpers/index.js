/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretSet = new Set(secretWord.split(""));
  const guessedSet = new Set(guessedWord.split(""));

  return [...secretSet].filter(letter => guessedSet.has(letter)).length;
  // let letterMatchCount = 0;
  // [...guessedSet].forEach(letter => {
  //   if (secretSet.has(letter)) {
  //     letterMatchCount += 1;
  //   }
  // });
  // return letterMatchCount;
}
