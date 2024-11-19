import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <h1 className="counter-display">{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="counter-button"
            >
                Increment
            </button>
            <button
                onClick={() => setCount(count - 1)}
                className="counter-button"
            >
                Decrement
            </button>
            <button onClick={() => setCount(0)} className="counter-button">
                {" "}
                Reset
            </button>
        </div>
    );
};

export default Counter;
