import React from "react";

function InfoView() {
    return (
        <div className="infoview">
            <h1>This is the Info page!</h1>
            <p style={{ fontStyle: "italic" }}>Author: Valtteri Havula</p>
            <p>
                Every image on this site is provided by the creator of this
                site.
            </p>
            <h3>Guide:</h3>
            <ul>
                <li>
                    This site is used to make a list of tasks. To add them press
                    the button on the home page.
                </li>
            </ul>
        </div>
    );
}

export default InfoView;
