import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleGuessInput(value) {
    const updatedGuesses = [...guesses];
    updatedGuesses.push(value);
    setGuesses(updatedGuesses);
  }
  return <>
    <GuessResults guesses={guesses}/>
    <GuessInput handleGuessInput={handleGuessInput} />
  </>;
}

export default Game;
