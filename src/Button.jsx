import React from "react";

const Button = () => {
    const handleClick = (e) => {
        e.target.textContent = "Ouch";
    };
    const handleDoubleClick = (e) => {
        e.target.textContent = "Click me";
    };

    return (
        <button
            onClick={(e) => handleClick(e)}
            onDoubleClick={(e) => handleDoubleClick(e)}
        >
            Click me
        </button>
    );
};

export default Button;
