import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, contexts, url, handleDelete, putData }) => {
    //Handle the PUT requests made to edit the tasks:
    const handlePut = async (id) => {
        const name = await prompt("Give task name, please:");
        const promptContexts = await prompt(
            "Give the task's contexts by id, if multiple, separate by commas (,):"
        );
        if (!name | !promptContexts) {
            throw new Error(
                alert("No empty fields allowed. Please, give valid inputs.")
            );
        }
        const separatedContexts = await promptContexts.split(",");
        const taskContexts = separatedContexts.map((context) => {
            const index = Number(context);
            if (!Number.isInteger(index)) {
                throw new Error(alert("Give a number please."));
            }
            return index;
        });
        const data = await { name, taskContexts };
        await putData(url, id, data);
    };

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <div key={task.id} className="task-block">
                        <Task task={task} contexts={contexts} />
                        <button onClick={() => handleDelete(url, task.id)}>
                            delete task
                        </button>
                        <button onClick={() => handlePut(task.id)}>edit</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Tasks;
