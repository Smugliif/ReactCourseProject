import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, contexts, deleteData }) => {
    return (
        <div className="tasks">
            {tasks.map((task) => {
                return (
                    <div className="task_block">
                        <Task key={task.id} task={task} contexts={contexts} />
                        <button
                            onClick={() =>
                                deleteData(
                                    "http://localhost:3010/tasks",
                                    task.id
                                )
                            }
                        >
                            delete task
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Tasks;
