import React, { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#000000");

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            ></input>
        </div>
    );
};

export default ColorPicker;
