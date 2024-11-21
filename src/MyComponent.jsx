import React, { useState } from "react";

const MyComponent = () => {
    const [counter, counterState] = useState(0);

    return (
        <div>
            <p>Count : {counter}</p>
            <button
                onClick={() => {
                    counterState((c) => c + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    counterState((c) => c - 1);
                }}
            >
                Decrement
            </button>
            <button onClick={() => counterState(0)}>Reset</button>
        </div>
    );
};

export default MyComponent;
