import React from "react";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { AddTaskModal } from "../modals/AddTaskModal";

export const HomePage = () => {
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState([]);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="fixed bottom-10 left-0 w-full flex justify-center z-50">
        <button
          onClick={() => setShowTask(true)}
          className="bg-black text-white text-5xl rounded-full p-4 md:hidden shadow-2xl "
        >
          <GrAdd />
        </button>
        <AddTaskModal
          isOpen={showTask}
          onClose={() => setShowTask(false)}
          title="Add New Task"
        >
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Task Name"
              value={task.title}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
              className="border w-70 rounded-xl mb-3 p-2 focus:w-90   focus:text-left focus:placeholder:text-transparent duration-600 focus:placeholder:duration-300"
            />
            <textarea
              type="text"
              placeholder="Description"
              value={task.description}
              onChange={(e) => {
                setTask({ ...task, description: e.target.value });
              }}
              className="border w-70 h-16 rounded-xl mb-3 p-2 focus:w-90 focus:h-20 duration-600  focus:text-left focus:placeholder:text-white focus:placeholder:duration-300"
            />
          </div>
          <button
            onClick={() => {
              const newTask = {
                title: task.title,
                description: task.description,
                id: Date.now(),
              };
              setTasks([...tasks, newTask]);
              setTask({title : "" , description : ""});
            }}
            className="bg-black text-white w-full mt-4 py-2"
          >
            Save
          </button>
        </AddTaskModal>
      </div>
    </div>
  );
};
