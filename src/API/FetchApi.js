import React from "react";

function FetchAPI() {
    const getAPI = () => {
        fetch("http://localhost:3010/tasks")
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div>
            My API <br />
            <button onClick={getAPI}>Fetch API</button>
        </div>
    );
}

export default FetchAPI;
