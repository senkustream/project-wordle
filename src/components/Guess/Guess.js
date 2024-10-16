import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
      <p className="guess">
        { range(5).map((value, index) => {
            const className = guess ? `cell ${guess[index].status}` : 'cell';
            return (<span key={index} className={className}>{ guess ? guess[index].letter : ''}</span>)
          })
        }
      </p>
  );
}

export default Guess;
