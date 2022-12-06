import React from "react";
import { taskData } from "./FetchApi";

export const Tasks = () => {
    return (
        <>
            <div>
                {taskData.map((task, key) => {
                    return (
                        <div key={key}>
                            {`${task.id}, ${task.name}, ${task.contextId},`}
                        </div>
                    );
                })}
            </div>
            <div>
                My API <br />
                <button onClick={() => console.log(taskData)}>
                    console log
                </button>
            </div>
        </>
    );
};

export default Tasks;
