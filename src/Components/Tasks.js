import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, contexts, deleteData }) => {
    return (
        <div className="tasks">
            {tasks.map((task) => {
                return (
                    <div key={task.id} className="task_block">
                        <Task task={task} contexts={contexts} />
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
