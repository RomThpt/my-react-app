import React, { useState } from "react";

const MyComponent = () => {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    const handleYearChange = (e) => {
        setCar((c) => ({ ...c, year: e.target.value }));
    };

    const handleMakeChange = (e) => {
        setCar((c) => ({ ...c, make: e.target.value }));
    };

    const handleModelChange = (e) => {
        setCar((c) => ({ ...c, model: e.target.value }));
    };

    return (
        <div>
            <p>
                Your car is a {car.make} {car.model} from {car.year}
            </p>
            <input
                type="number"
                value={car.year}
                onChange={(e) => {
                    handleYearChange(e);
                }}
            />{" "}
            <br />
            <input
                type="text"
                value={car.make}
                onChange={(e) => {
                    handleMakeChange(e);
                }}
            />{" "}
            <br />
            <input
                type="text"
                value={car.model}
                onChange={(e) => {
                    handleModelChange(e);
                }}
            />{" "}
            <br />
        </div>
    );
};

export default MyComponent;
