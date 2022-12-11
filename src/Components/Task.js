import React from "react";

const Task = ({ task, contexts }) => {
    return (
        <>
            <ul className="task_item">
                <li>{task.id}</li>
                <li>{task.name}</li>
                {task.taskContexts.map((taskId) => {
                    return contexts.map((context) => {
                        if (taskId === context.id) {
                            return <li key={taskId}>{context.title}</li>;
                        }
                    });
                })}
                {/* {console.log(Array.isArray(task.contextId))} */}
            </ul>
        </>
    );
};

export default Task;
