import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      { range(NUM_OF_GUESSES_ALLOWED).map((value, index) => {
          return(
            <Guess key={index} guess={guesses[index]} />
          )
        })
      }
    </div>
  );
}

export default GuessResults;
