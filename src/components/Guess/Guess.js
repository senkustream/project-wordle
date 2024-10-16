import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
      <p className="guess">
        { range(5).map((value, index) => {
            return (<span key={index} className={`cell ${guess ? guess[index].status : ''}`}>{ guess ? guess[index].letter : ''}</span>)
          })
        }
      </p>
  );
}

export default Guess;
