import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
    const [user, setUser] = useState(null);
    return (
        <div className="box">
            <h1>Component A</h1>
            <button onClick={() => setUser({ name: "John Doe" })}>
                Set User
            </button>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    );
};

export default ComponentA;
