import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";

import FunView from "./FunViewComponent";
import InfoView from "./Info";
import Tasks from "./Components/Tasks";
import Contexts from "./Components/Contexts";

//This is the main .js file and is used to setup the general layout of all
//pages and then to render all the view components.

function App() {
    //API URLs used:
    const tasksUrl = "http://localhost:3010/tasks";
    const contextsUrl = "http://localhost:3010/contexts";

    //The tasks and contexts from the API are set here for the app to use:
    const [tasks, setTasks] = useState([]);
    const [contexts, setContexts] = useState([]);

    //Runs every time the page renders:
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
            throw new Error(alert("No url given!"));
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
            "Give the task a context by id number, if multiple separate by commas (,):"
        );
        if (!name | !promptContexts) {
            return alert("No empty fields allowed. Please, give valid inputs.");
        }
        const separatedContexts = await promptContexts.split(",");
        const taskContexts = await separatedContexts.map((context) => {
            const index = Number(context);
            if (!Number.isInteger(index)) {
                throw new Error(alert("Give a number please."));
            }
            return index;
        });
        const data = await { name, taskContexts };
        await postData(url, data);
        const newTasks = await fetchData(url);
        await setTasks(newTasks);
    };

    //Handles POST request content for contexts
    const handleContextPost = async (url) => {
        const input = await prompt("Give the name for your context.");
        if (!input) {
            throw new Error(alert("Context name can't be empty!"));
        }
        //Make input's first letter uppercase
        const title = input.charAt(0).toUpperCase() + input.slice(1);
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
    const handleDelete = async (url, id) => {
        //If tasks are being deleted
        if (url === tasksUrl) {
            if (
                window.confirm(
                    `Are you sure you want to delete ${tasks[id - 1].name}?`
                )
            ) {
                await fetch(`${url}/${id}`, { method: "DELETE" });
                const newTasks = await tasks.filter((task) => task.id !== id);
                await setTasks(newTasks);
            }
        }
        //If contexts are being deleted
        if (url === contextsUrl) {
            if (
                window.confirm(
                    `Are you sure you want to delete ${contexts[id - 1].title}?`
                )
            ) {
                //Check if the context being deleted is still in use
                const isInUse = () => {
                    for (let i = 0; i < tasks.length; i++) {
                        for (let l = 0; l < tasks[i].taskContexts.length; l++) {
                            if (tasks[i].taskContexts[l] === id) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                const useCheck = await isInUse();
                if (!useCheck) {
                    await fetch(`${url}/${id}`, { method: "DELETE" });
                    const newContexts = await contexts.filter(
                        (context) => context.id !== id
                    );
                    await setContexts(newContexts);
                } else {
                    throw new Error(
                        alert("The context you want to delete is still in use!")
                    );
                }
            }
        }
    };

    return (
        <Router>
            <div>
                <nav className="nav-menu">
                    <ul>
                        <li className="nav1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav2">
                            <Link to="/fun">Fun</Link>
                        </li>
                        <li className="nav3">
                            <Link to="/info">Info</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    {/*Homepage*/}
                    <Route
                        path="/"
                        element={
                            <>
                                <>
                                    <br></br>
                                    <div className="header">
                                        <h1>Tasks</h1>
                                    </div>
                                </>
                                <div className="buttons">
                                    <button
                                        className="button-1"
                                        onClick={() => {
                                            handleTaskPost(tasksUrl);
                                        }}
                                    >
                                        NEW TASK
                                    </button>
                                    <button
                                        className="button-1"
                                        onClick={() => {
                                            handleContextPost(contextsUrl);
                                        }}
                                    >
                                        NEW CONTEXT
                                    </button>
                                </div>
                                <div className="contents">
                                    <section className="tasks">
                                        {tasks && contexts && (
                                            <Tasks
                                                tasks={tasks}
                                                contexts={contexts}
                                                url={tasksUrl}
                                                handleDelete={handleDelete}
                                                putData={putData}
                                            />
                                        )}
                                    </section>
                                    <aside className="contexts">
                                        <h1>Context List</h1>
                                        {contexts && (
                                            <Contexts
                                                contexts={contexts}
                                                url={contextsUrl}
                                                handleDelete={handleDelete}
                                            />
                                        )}
                                    </aside>
                                </div>
                            </>
                        }
                    />
                    {/*Calendar View*/}
                    <Route path="/fun" element={<FunView />} />
                    {/*Info View*/}
                    <Route path="/info" element={<InfoView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
