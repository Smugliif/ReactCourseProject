import React from "react";

// const postTest = () => {
//     fetch("http://localhost:3010/tasks", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             name: "Höö",
//             contextId: [1],
//         }),
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// };
// // postTest();

const DeleteTask = ({ id }) => {
    //TODO make number check
    // if (isNaN(id)) {
    //     console.log("Input is not a number");
    // } else {
    //     console.log(id);
    // }
};

// fetch(`http://localhost:3010/tasks/${id}`, {
//     method: "DELETE",
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

function ApiManager() {
    return (
        <>
            <h3>apua</h3>
            <DeleteTask id={2} />
        </>
    );
}

export default ApiManager;
