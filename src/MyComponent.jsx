import React, { useState, useEffect, useRef } from "react";

const MyComponent = () => {
    const ref = useRef(0);

    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component unmounted");
        };
    }, []);
    const handleClick = () => {
        ref.current++;
    };

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default MyComponent;
