import { useState } from "react";

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    return (
        <div>
            <p>
                Name: {name}
                <button onClick={() => setName("RomThpt")}>Update name</button>
            </p>
            <p>
                Age: {age}
                <button onClick={() => setAge(age + 1)}>Increment</button>
                <button onClick={() => setAge(age - 1)}>Decrement</button>
            </p>
            <p>
                Employed: {isEmployed ? "Yes" : "No"}
                <button onClick={() => setIsEmployed(!isEmployed)}>
                    Toggle employment status
                </button>
            </p>
        </div>
    );
};

export default MyComponent;
