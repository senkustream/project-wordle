import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isOver, setIsOver] = React.useState(false);
  // game is over happens when?
  // - User correct answer the guess <= 6 guesses
  // - User wrong answer the guess === 6 guesess
  function handleGuessInput(value) {
    const updatedGuesses = [...guesses];
    const guess = checkGuess(value, answer);
    setIsCorrect(value === answer);
    updatedGuesses.push(guess);
    if (((updatedGuesses.length <= NUM_OF_GUESSES_ALLOWED) && (value === answer))) {
      setIsOver(true);
    }
    if ((updatedGuesses.length === NUM_OF_GUESSES_ALLOWED) && (value !== answer)) {
      setIsOver(true);
    }
    setGuesses(updatedGuesses);
  }
  return <>
    <GuessResults guesses={guesses}/>
    <GuessInput handleGuessInput={handleGuessInput} isOver={isOver} />
    {((guesses.length <= NUM_OF_GUESSES_ALLOWED) && isCorrect) ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    ) : ''}
    { ((guesses.length === NUM_OF_GUESSES_ALLOWED) && !isCorrect) ? (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    ) : ''}
  </>;
}

export default Game;
