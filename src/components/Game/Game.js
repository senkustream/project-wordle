import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState('running');
  // Game status:
  // - User correct answer the guess <= 6 guesses => win
  // - User wrong answer the guess === 6 guesess => lose
  // - Else then game still running
  function handleGuessInput(value) {
    const updatedGuesses = [...guesses];
    const guess = checkGuess(value, answer);
    setIsCorrect(value === answer);
    updatedGuesses.push(guess);
    if (((updatedGuesses.length <= NUM_OF_GUESSES_ALLOWED) && (value === answer))) {
      setGameStatus('win');
    }
    if ((updatedGuesses.length === NUM_OF_GUESSES_ALLOWED) && (value !== answer)) {
      setGameStatus('lose');
    }
    setGuesses(updatedGuesses);
  }
  return <>
    <GuessResults guesses={guesses}/>
    <GuessInput handleGuessInput={handleGuessInput} gameStatus={gameStatus} />
    {(gameStatus === 'win') && (
      <WinBanner numOfGuesses={guesses.length}/>
    )}
    { (gameStatus === 'lose') && (
      <LoseBanner answer={answer}/>
    )}
  </>;
}

export default Game;
