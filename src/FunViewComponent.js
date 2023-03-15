import React, { useState } from "react";
import bern from "./Images/bern.png";

function Fun() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Meow</h1>
            <img
                src={bern}
                alt="Bern"
                style={{ margin: "auto", display: "block", width: "50%" }}
            />
            <button
                style={{ color: "red", width: "100%", height: "50px" }}
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {count}
            </button>
        </div>
    );
}

export default Fun;
