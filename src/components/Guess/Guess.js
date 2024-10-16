import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
      <p className="guess">
        { guess ? guess.split('').map((letter, index) => {
          return (<span key={index} className="cell">{letter}</span>)
        }) : range(5).map((value, index) => {
          return (<span key={index} className="cell"></span>)
        })}
      </p>
  );
}

export default Guess;
