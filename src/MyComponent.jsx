import React, { useState } from "react";

const MyComponent = () => {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const addCar = () => {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars((c) => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    };

    const removeCar = (index) => {
        setCars((c) => c.filter((_, i) => i !== index));
    };

    const changeCarYear = (e) => {
        setCarYear(e.target.value);
    };

    const changeCarModel = (e) => {
        setCarModel(e.target.value);
    };

    const changeCarMake = (e) => {
        setCarMake(e.target.value);
    };

    return (
        <div>
            <h2>List of car</h2>
            <ul>
                {cars.map((car, index) => {
                    return (
                        <li key={index} onClick={() => removeCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>
                    );
                })}
            </ul>

            <input
                type="number"
                value={carYear}
                onChange={(e) => {
                    changeCarYear(e);
                }}
            />
            <br />
            <input
                type="text"
                value={carMake}
                onChange={(e) => changeCarMake(e)}
                placeholder="Enter car make"
            />
            <br />
            <input
                type="text"
                value={carModel}
                onChange={(e) => changeCarModel(e)}
                placeholder="Enter car model"
            />
            <button onClick={() => addCar()}>Add car</button>
        </div>
    );
};

export default MyComponent;
