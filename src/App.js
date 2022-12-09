import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";

import CalendarView from "./CalendarViewComponent";
import ToDoComponent from "./TodoViewComponent";
import InfoView from "./Info";
import Tasks from "./Components/Tasks";
import FetchAPI from "./API/FetchApi";
import ApiManager from "./API/ApiManager";

//This is the main .js file and is used to setup the general layout of all
//pages and then to display all the view components.

function App() {
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
