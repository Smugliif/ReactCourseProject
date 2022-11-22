import React from "react";
// import { Routes, Route, useParams, Link, useLocation } from "react-router-dom";
import bern from "./bern.png";
import s1 from "./ahaha.wav";

function BernkastelViewComponent() {
    const audio = new Audio(s1);
    return (
        <div>
            <h1>Meow</h1>
            <img
                src={bern}
                alt="Lambdadelta"
                style={{ margin: "auto", display: "block" }}
            />
            <button
                onClick={() => {
                    audio.play();
                }}
                style={{ color: "red", width: "100%", height: "50px" }}
            >
                Click me for a sound!
            </button>
        </div>
    );
}

export default BernkastelViewComponent;
