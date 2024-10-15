import React from "react";

function GuessInput() {
    const [guess, setGuess] = React.useState('');

    return (
        <form className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                console.log({ guess });
                setGuess('');
            }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" 
                value={guess}
                pattern="\w{5}"
                onChange={(event) => {
                    const value = event.target.value;
                    setGuess(value.toUpperCase());
                }}/>
        </form>
    )
}

export default GuessInput;