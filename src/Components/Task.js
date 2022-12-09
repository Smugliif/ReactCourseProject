import React from "react";

const Task = ({ task, contexts }) => {
    return (
        <div>
            <ul className="task_item">
                <li>{task.id}</li>
                <li>{task.name}</li>
                {task.contextId.map((taskId) => {
                    return contexts.map((context) => {
                        if (taskId === context.id) {
                            return <li key={taskId}>{context.title}</li>;
                        }
                    });
                })}
                {/* {console.log(Array.isArray(task.contextId))} */}
            </ul>
        </div>
    );
};

export default Task;
