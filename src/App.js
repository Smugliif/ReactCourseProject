import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import "./App.css";

import BernkastelViewComponent from "./BernkastelViewComponent";
import LambdadeltaViewComponent from "./LambdadeltaViewComponent";
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
                            <Link to="/Bernkastel">Calendar</Link>
                        </li>
                        <li className="nav3">
                            <Link to="/Lambdadelta">TODO-list</Link>
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
                    <Route
                        path="/Bernkastel"
                        element={<BernkastelViewComponent />}
                    />
                    <Route
                        path="/Lambdadelta"
                        element={<LambdadeltaViewComponent />}
                    />
                    <Route path="/Info" element={<InfoView />} />
                </Routes>
            </div>
            <div style={{ textAlign: "center" }}>
                <Link to="/Info">Info</Link>
            </div>
        </Router>
    );
}

export default App;
