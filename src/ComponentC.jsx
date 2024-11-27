import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
const ComponentC = () => {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component C</h1>
            <p>User: {user ? user.name : "No User"}</p>
        </div>
    );
};

export default ComponentC;
