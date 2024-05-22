import React, {useState} from 'react';

const ChangeCaps = () => {

    const [word, setWord] = useState();
    const [inputValue, setInputValue] = useState();
    const [btnChecked, setBtnChecked] = useState();
    
    const handleInput = (event) => {
        setInputValue(event.target.value);      
    }

    const handleButton = (event) => {
        setBtnChecked(event.target.value);    
    }

    const handleSelection = () => {       
        if (!btnChecked || !inputValue) {
            setWord("You must enter a word AND select a transpositionalization.")
        } else if (btnChecked === "capFirst") {
            capFirst();
        } else if (btnChecked === "capLast") {
            capLast();
        } else if (btnChecked === "capAll") {
            capAll();
        }
    }

    const capFirst = () => {
        setWord(inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase());
    }

    const capLast = () => {
        setWord(inputValue.slice(0, (inputValue.length -1)).toLowerCase() + inputValue.charAt(inputValue.length - 1).toUpperCase());
    }

    const capAll = () => {
        setWord(inputValue.toUpperCase());
    }

    return (
        <div>
            <h4>Transquonchinator</h4>
            <div>
                Enter text to transplantorize:<br />
                <label htmlFor="textToTranslate">
                    <input onChange={handleInput} type="text" id="text" />
                </label>
                <button onClick={handleSelection}>Translatorate</button>
            </div>
            <div>
                <input type='radio' name="btn" value="capFirst" id="capFirst" onChange={handleButton}/>Capitalize First Letter<br />
                <input type='radio' name="btn" value="capLast" id="capLast" onChange={handleButton}/>Capitalize Last Letter<br />
                <input type='radio' name="btn" value="capAll" id="capAll" onChange={handleButton}/>Capitalize All Letters<br />
                <p className="word">{word}</p>
            </div>
        </div>
    )

}

export default ChangeCaps

