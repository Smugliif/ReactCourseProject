//This is component is used to manage and retrieve information from
//the db.json file which includes all the tasks data.

import React from "react";

//Get's API from db.json
function FetchAPI() {
    const getAPI = () => {
        fetch("http://localhost:3010/tasks")
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    const postTest = () => {
        fetch("http://localhost:3010/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: 6,
                name: "Javaile",
                contextId: 1,
            }),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div>
            My API <br />
            <button onClick={getAPI}>Fetch API</button>
            <button onClick={postTest}>Post</button>
        </div>
    );
}

export default FetchAPI;
