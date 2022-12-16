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
                <li>This site is used to make a list of tasks.</li>
                <li>
                    To delete tasks or contexts press the delete button next to
                    them.
                </li>
                <li>
                    To add new contexts or tasks you can do so by pressing the
                    buttons at the bottom of the page and following the
                    instructions
                </li>
            </ul>
        </div>
    );
}

export default InfoView;
