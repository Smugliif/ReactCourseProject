import React from "react";

const Task = ({ task, contexts }) => {
    return (
        <>
            <ul className="taskitem">
                <li>{task.id}</li>
                <li>{task.name}</li>
                <br></br>
                <li>Contexts:</li>
                {task.taskContexts.map((taskId) => {
                    return <li key={taskId}>{contexts[taskId - 1].title}</li>;
                })}
                {/* {console.log(Array.isArray(task.contextId))} */}
            </ul>
        </>
    );
};

export default Task;
