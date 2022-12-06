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
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3010/tasks")
            .then((response) => response.json())
            .then((json) => {
                setTasks(json);
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
    console.log(tasks);

    return (
        <>
            <h1>items</h1>
            <div className="tasks">
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <h1>{task.id}</h1>
                            <h2>{task.name}</h2>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default FetchAPI;
