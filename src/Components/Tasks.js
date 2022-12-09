import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, contexts }) => {
    return (
        <div className="tasks">
            {tasks.map((task) => {
                return <Task key={task.id} task={task} contexts={contexts} />;
            })}
        </div>
    );
};

export default Tasks;
