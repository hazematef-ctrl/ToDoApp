import React from "react";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { MdDoneOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { AddTaskModal } from "../modals/AddTaskModal";

export const HomePage = () => {
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState([]);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* mobile view */}
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
              setTask({ title: "", description: "" });
              setShowTask(false);
            }}
            className="bg-black text-white w-full mt-4 py-2"
          >
            Save
          </button>
        </AddTaskModal>
      </div>
      {/* end of mobile view */}
      {/* Task List */}
      <div className="min-h-2.5 p-4 bg-white/40 w-[80%] m-auto rounded-b-2xl ">
        <h1 className="text-center text-4xl font-extrabold p-2.5 mb-2">
          Task List
        </h1>
        {tasks.length === 0 ? (
          <h1 className="text-black text-center opacity-50">
            No Tasks To Be Done
          </h1>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 rounded-xl mb-3 text-black border border-white/10 flex justify-between"
            >
              <div>
                <h1 className="font-bold text-lg">{task.title}</h1>
                <p className="text-sm opacity-70">{task.description}</p>
              </div>
              <div>
                <button className="bg-black text-white text-2xl p-1.5 m-1 md:p-3 md:m-2.5 rounded-full md:cursor-pointer">
                  <MdDoneOutline />
                </button>
                <button className="bg-black text-white text-2xl p-1.5 m-1 md:p-3 md:m-2.5 rounded-full md:cursor-pointer">
                  <AiFillDelete />
                </button>
                <button className="bg-black text-white text-2xl p-1.5 m-1 md:p-3 md:m-2.5 rounded-full md:cursor-pointer">
                  <MdOutlineModeEdit />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/*End Of Task List */}

      {/* Desktop View */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full justify-center pb-8 z-50">
        <form
          className="flex flex-col justify-end items-center "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="bg-white rounded-4xl shadow-2xl w-200 h-37">
            <h1 className="mr-auto p-2.5 text-2xl font-extrabold text-center">
              Add New Task
            </h1>
            <div className="flex gap-10 justify-evenly items-center">
              <input
                type="text"
                placeholder="Task Name"
                value={task.title}
                onChange={(e) => {
                  setTask({ ...task, title: e.target.value });
                }}
                className="border w-70 h-10 rounded-xl mb-3 p-2 focus:text-left focus:placeholder:text-transparent duration-600 focus:placeholder:duration-300"
              />
              <textarea
                type="text"
                placeholder="Description"
                value={task.description}
                onChange={(e) => {
                  setTask({ ...task, description: e.target.value });
                }}
                className="border w-70 h-12 rounded-xl mb-3 p-2  focus:h-15 duration-600  focus:text-left focus:placeholder:text-white focus:placeholder:duration-300"
              />
              <button
                onClick={() => {
                  if (!task.title.trim() || !task.description.trim()) {
                    return;
                  }
                  const newTask = {
                    title: task.title.toUpperCase(),
                    description: task.description,
                    id: Date.now(),
                  };
                  setTasks([...tasks, newTask]);
                  setTask({ title: "", description: "" });
                }}
                className="bg-black text-white p-6 mt-4 py-2 mb-6.5 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end of desktop view */}
    </div>
  );
};
