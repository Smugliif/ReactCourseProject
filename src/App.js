import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";

import CalendarView from "./CalendarViewComponent";
import ToDoComponent from "./TodoViewComponent";
import InfoView from "./Info";
import Tasks from "./Components/Tasks";
import Form from "./Components/Form";
import ApiManager from "./API/ApiManager";

//This is the main .js file and is used to setup the general layout of all
//pages and then to render all the view components.

function App() {
    const tasksUrl = "http://localhost:3010/tasks";
    const contextsUrl = "http://localhost:3010/contexts";

    const [tasks, setTasks] = useState([]);
    const [contexts, setContexts] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const tasksFromServer = await fetchData(tasksUrl);
            const contextsFromServer = await fetchData(contextsUrl);
            await setTasks(tasksFromServer);
            await setContexts(contextsFromServer);
        };
        getApi();
    }, []);

    //Get the data from given API
    const fetchData = async (url) => {
        if (!url) {
            return console.log("No url given!");
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    //Send POST request to API with data
    const postData = async (url, data) => {
        await fetch(`${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    };

    //Handles POST request content for tasks
    const handleTaskPost = async (url) => {
        const name = prompt("Give your new task a name:");
        const promptContexts = prompt(
            "Give a context to the task,if multiple separate by commas (,):"
        );
        if (!name | !promptContexts) {
            return alert("No empty fields allowed. Please, give valid inputs.");
        }
        const separatedContexts = await promptContexts.split(",");
        const taskContexts = await separatedContexts.map((context) =>
            Number(context)
        );
        const data = await { name, taskContexts };
        await postData(url, data);
        const newTasks = await fetchData(url);
        await setTasks(newTasks);
    };

    //Handles POST request content for contexts
    const handleContextPost = async (url) => {
        const title = await prompt("Give the name for your context.");
        if (!title) {
            return alert("Context name can't be empty!");
        }
        await postData(url, { title });
        const newContexts = await fetchData(url);
        setContexts(newContexts);
    };

    //Edit existing data using a PUT request
    const putData = async (url, id, data) => {
        await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const newTasks = await fetchData(url);
        await setTasks(newTasks);
    };

    //Delete selected data
    const deleteData = async (url, id) => {
        if (
            window.confirm(
                `Are you sure you want to delete ${tasks[id - 1].name}?`
            )
        ) {
            await fetch(`${url}/${id}`, { method: "DELETE" });
            const newTasks = await tasks.filter((task) => task.id !== id);
            await setTasks(newTasks);
        }
    };

    return (
        <Router>
            <div>
                <nav className="nav_menu">
                    <ul>
                        <li className="nav1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav2">
                            <Link to="/calendar">Calendar</Link>
                        </li>
                        <li className="nav3">
                            <Link to="/info">Info</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <>
                                    <br></br>
                                    <ToDoComponent />
                                </>
                                {tasks && contexts && (
                                    <Tasks
                                        tasks={tasks}
                                        contexts={contexts}
                                        deleteData={deleteData}
                                        putData={putData}
                                    />
                                )}
                                <Form />
                                <button
                                    onClick={() => {
                                        handleTaskPost(tasksUrl);
                                    }}
                                >
                                    post new task
                                </button>
                                <button
                                    onClick={() => {
                                        handleContextPost(contextsUrl);
                                    }}
                                >
                                    post new context
                                </button>
                                <ApiManager />
                            </>
                        }
                    />
                    <Route path="/calendar" element={<CalendarView />} />
                    <Route path="/info" element={<InfoView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
