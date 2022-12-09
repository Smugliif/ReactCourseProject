//This is component is used to retrieve information from
//the db.json file which includes all the tasks data. Additionally
//this component displays the retrieved information.

import React, { useState, useEffect } from "react";

//Get's API from db.json
function FetchAPI() {
    const [tasks, setTasks] = useState([]);
    const [contexts, setContexts] = useState([]);
    useEffect(() => {
        const getApi = async () => {
            const tasksFromServer = await fetchTasks();
            const contextsFromServer = await fetchContexts();
            setTasks(tasksFromServer);
            setContexts(contextsFromServer);
        };
        getApi();
    }, []);

    //Gets the tasks from the API
    const fetchTasks = async () => {
        const response = await fetch("http://localhost:3010/tasks");
        const data = await response.json();
        console.log(data);
        return data;
    };

    //Gets the contexts from the API
    const fetchContexts = async () => {
        const response = await fetch("http://localhost:3010/contexts");
        const data = await response.json();
        console.log(data);
        return data;
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
