
import { ChangeEvent,  useState } from "react";
import { Task } from "../../Interfaces/index";
import React from "react";

const TaskManager = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() != "") {
      setTask([
        ...task,
        {
          id: task.length + 1,
          text: newTask,
        },
      ]);
      setNewTask("");
    }
  };
  return (
    <section className="text-gray-400 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-auto mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <input
                  type="text"
                  value={newTask}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="col-6 text-white">
            <ul>
              {task.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskManager;
