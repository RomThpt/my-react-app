import React, { useState } from "react";

const MyComponent = () => {
    const [foods, setFoods] = useState([]);
    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods((f) => [...f, newFood]);
    };
    const handleRemoveFood = (index) => {
        setFoods(
            foods.filter((_, i) => {
                i !== index;
            })
        );
    };

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li
                        key={index}
                        onClick={(index) => {
                            handleRemoveFood(index);
                        }}
                    >
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button
                onClick={() => {
                    handleAddFood();
                }}
            >
                Add Food
            </button>
        </div>
    );
};

export default MyComponent;
