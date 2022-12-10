import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";

import CalendarView from "./CalendarViewComponent";
import ToDoComponent from "./TodoViewComponent";
import InfoView from "./Info";
import Tasks from "./Components/Tasks";
import ApiManager from "./API/ApiManager";

//This is the main .js file and is used to setup the general layout of all
//pages and then to render all the view components.

function App() {
    const tasksUrl = "http://localhost:3010/tasks";
    const contextsUrl = "http://localhost:3010/contexts";

    const dataPayload = { name: "MyTask", contextId: [1] }; //FOR TESTING ONLY

    const [tasks, setTasks] = useState([]);
    const [contexts, setContexts] = useState([]);
    useEffect(() => {
        const getApi = async () => {
            const tasksFromServer = await fetchData(tasksUrl);
            const contextsFromServer = await fetchData(contextsUrl);
            setTasks(tasksFromServer);
            setContexts(contextsFromServer);
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
        console.log(data);
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

    //Delete selected data
    const deleteData = async (url, id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            await fetch(`${url}/${id}`, { method: "DELETE" }).then(
                window.alert("Deleted")
            );
        }
    };

    return (
        <Router>
            <div>
                <nav>
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
                                <Tasks tasks={tasks} contexts={contexts} />
                                <ApiManager />
                                <button
                                    onClick={() => {
                                        deleteData(tasksUrl, 3);
                                    }}
                                >
                                    Delete 5
                                </button>
                                <button
                                    onClick={() => {
                                        postData(tasksUrl, dataPayload);
                                    }}
                                >
                                    Post data
                                </button>
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
