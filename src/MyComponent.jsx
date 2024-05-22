import React, { useState } from 'react'

const MyComponent = (props) => {

    const [name, setName] = useState("Guest"); //returns array with 2 elements; variable and setter function
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    
    const updateName = () => {
        const newName = document.getElementById("newName").value;
        console.log(newName)
        setName(newName)
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }



    return (
        <div>
            <h4>Guest Checker</h4>
            <p>Name: {name}</p>
            <label htmlFor="newName">
                <input id="newName" type="text" name="newName" />
            </label>
        
            <button target="newName" onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>
        </div>    
    )



}

export default MyComponent