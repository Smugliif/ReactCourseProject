//This is component is used to manage and retrieve information from
//the db.json file which includes all the tasks data.

import React, { useState, useEffect } from "react";

// function Task(id, name, contextId) {
//     this.id = id;
//     this.name = name;
//     this.contextId = contextId;
// }

//Get's API from db.json
function FetchAPI() {
    const [items, setItems] = useState([]);
    let taskData = [];
    useEffect(() => {
        fetch("http://localhost:3010/tasks")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setItems(json);
            });
    }, []);

    const postTest = () => {
        fetch("http://localhost:3010/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Höö",
                contextId: 1,
            }),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    console.log(items[1].id);

    return (
        <>
            <h1>items</h1>
            <li>{items[1].id}</li>
        </>
    );
}

export default FetchAPI;
