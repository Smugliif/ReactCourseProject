import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import "./App.css";

import CalendarView from "./CalendarViewComponent";
import ToDoComponent from "./TodoViewComponent";
import InfoView from "./Info";
import FetchAPI from "./API/FetchApi";

//This is the main .js file and is used to setup the general layout of all
//pages and then to display all the view components.

function App() {
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
                                <FetchAPI />
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
