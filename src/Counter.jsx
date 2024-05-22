import React, {useState} from "react";

const Counter = () => {

    const [num, setNum] = useState(0);
    const [incBy, setIncBy] = useState(1);

    const handleCountChange = (event) => {
        setIncBy(Number(event.target.value))
    }
    const decrement = () => {
        setNum(num - incBy)
    }

    const reset = () => {
        setNum(0)
    }

    const increment = () => {
        setNum(num + incBy)
    }
    
    return (
        <div className="counter">
            <h4>Counter</h4>
            <div>{num}</div>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increment</button>
            <div>
                <label htmlFor="counter"> Change by: <input type="text" name="counter" onChange={handleCountChange}></input></label>
            </div>
        </div>

    )

}

export default Counter