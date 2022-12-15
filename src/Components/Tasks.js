import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, contexts, url, handleDelete, putData }) => {
    const handlePut = async (id) => {
        const name = await prompt("Give task name, please:");
        const promptContexts = await prompt(
            "Give task contexts, if multiple, separate by commas (,):"
        );
        if (!name | !promptContexts) {
            return alert("No empty fields allowed. Please, give valid inputs.");
        }
        const separatedContexts = await promptContexts.split(",");
        const taskContexts = separatedContexts.map((context) =>
            Number(context)
        );
        console.log(contexts[0]);
        const data = await { name, taskContexts };
        await putData(url, id, data);
    };

    return (
        <div className="tasks">
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
