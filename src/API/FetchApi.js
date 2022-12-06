//This is component is used to retrieve information from
//the db.json file which includes all the tasks data. Additionally
//this component displays the retrieved information.

import React, { useState, useEffect } from "react";

// function Task(id, name, contextId) {
//     this.id = id;
//     this.name = name;
//     this.contextId = contextId;
// }

//Get's API from db.json
function FetchAPI() {
    const [tasks, setTasks] = useState([]);
    const [contexts, setContexts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3010/tasks")
            .then((response) => response.json())
            .then((json) => {
                setTasks(json);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:3010/contexts")
            .then((response) => response.json())
            .then((json) => {
                setContexts(json);
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

    return (
        <>
            <h1>items</h1>
            <div className="tasks">
                {tasks.map((task) => {
                    return (
                        <ul className="task_item" key={task.id}>
                            <li>{task.id}</li>
                            <li>{task.name}</li>
                            {/* {console.log(Array.isArray(task.contextId))} */}
                            {task.contextId.map((ids) => {
                                return contexts.map((context) => {
                                    if (ids === context.id) {
                                        return (
                                            <li key={ids}>{context.title}</li>
                                        );
                                    }
                                });
                            })}
                        </ul>
                    );
                })}
            </div>
        </>
    );
}

export default FetchAPI;
