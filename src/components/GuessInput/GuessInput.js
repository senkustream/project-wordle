import React from "react";

function GuessInput({ handleGuessInput, gameStatus }) {
    const [value, setValue] = React.useState('');

    return (
        <form className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                handleGuessInput(value);
                setValue('');
            }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" 
                value={value}
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                disabled={gameStatus !== 'running'}
                onChange={(event) => {
                    const value = event.target.value;
                    setValue(value.toUpperCase());
                }}/>
        </form>
    )
}

export default GuessInput;