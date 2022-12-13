import React from "react";
import { useState } from "react";

const Form = () => {
    const [userInput, setUserInput] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you submitted was ${userInput}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task name:
                <input
                    type="text"
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </label>
            <input type={"submit"} />
        </form>
    );
};

export default Form;
