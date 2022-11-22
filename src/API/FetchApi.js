import React from "react";

function FetchAPI() {
    const getAPI = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
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
