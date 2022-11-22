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
            <p>User guide will go here:</p>
        </div>
    );
}

export default InfoView;
