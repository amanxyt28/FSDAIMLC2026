import React, { useState } from "react";

function StateHandling() {
    const [counter, setCounter] = useState(0);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function increment() {
        setCounter(counter + 5);
    }
    function changeBGColor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }
    return (
        <div
            style={{
                backgroundColor: `rgb(${red},${green},${blue})`,
                border: "2px solid red"
            }}
        >
            <h2 style={{ color: "brown" }}>Counter App</h2>
            <h2>Counter={counter}</h2>
            <button onClick={increment}>increaseCounter</button>
            <button onClick={() => setCounter(counter - 5)}>
                decreaseCounter
            </button>
            <button onClick={changeBGColor}>changeBGColor</button>
        </div>
    );
}

export default StateHandling;