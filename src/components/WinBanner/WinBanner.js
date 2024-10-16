import React from 'react';

function WinBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
      </p>
    </div>
  );
}

export default WinBanner;
