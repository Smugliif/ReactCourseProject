import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import "./App.css";

import Calendar from "./CalendarViewComponent";
import LambdadeltaViewComponent from "./TodoViewComponent";
import FetchAPI from "./API/FetchApi";
import InfoView from "./Info";

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
                            <Link to="/todo">To Do-List</Link>
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
                                    <h1>Foo</h1>
                                </>
                                <FetchAPI></FetchAPI>
                            </>
                        }
                    />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route
                        path="/todo"
                        element={<LambdadeltaViewComponent />}
                    />
                    <Route path="/info" element={<InfoView />} />
                </Routes>
            </div>
            <div style={{ textAlign: "center" }}>
                <Link to="/info">Info</Link>
            </div>
        </Router>
    );
}

export default App;
