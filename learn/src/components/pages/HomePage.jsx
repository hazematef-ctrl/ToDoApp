import React from "react";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { MdDoneOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";
import { AddTaskModal } from "../modals/AddTaskModal";

export const HomePage = () => {
  // States
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  // end of states

  // functions
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const handleDeleteTask = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({
      title: taskToEdit.title,
      description: taskToEdit.description,
      completed: taskToEdit.completed,
    });
    setIsEditing(true);
    setCurrentId(id);
    if (window.innerWidth < 768) {
      setShowTask(true);
    }
  };

  const handleSave = () => {
    if (!task.title.trim()) return;

    if (isEditing) {
      setTasks(
        tasks.map((t) =>
          t.id === currentId
            ? { ...t, title: task.title.toUpperCase(), description: task.description }
            : t,
        ),
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      const newTask = {
        ...task,
        title: task.title.toUpperCase(),
        id: Date.now(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTask({ title: "", description: "", completed: false });
    setShowTask(false);
  };

  const handleCancel = () => {
    setTask({ title: "", description: "", completed: false });
    setIsEditing(false);
    setCurrentId(null);
    setShowTask(false);
  };
  // end of functions
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
          onClose={handleCancel}
          title={isEditing ? "Edit Task" : "Add New Task"}
        >
          <div
            className={`flex flex-col justify-center items-center p-3 rounded-xl border-2 transition-all duration-300 ${
              isEditing ? "border-blue-400 bg-blue-50" : "border-transparent"
            }`}
          >
            <input
              type="text"
              placeholder="Task Name"
              value={task.title}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
              className="border w-70 rounded-xl mb-3 p-2 focus:w-90 focus:text-left focus:placeholder:text-transparent duration-600 focus:placeholder:duration-300"
            />
            <textarea
              type="text"
              placeholder="Description"
              value={task.description}
              onChange={(e) => {
                setTask({ ...task, description: e.target.value });
              }}
              className="border w-70 h-16 rounded-xl mb-3 p-2 focus:w-90 focus:h-20 duration-600 focus:text-left focus:placeholder:text-white focus:placeholder:duration-300"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-black text-white w-full mt-4 py-2 rounded-lg cursor-pointer"
          >
            {isEditing ? "Update" : "Save"}
          </button>
          {isEditing && (
            <button
              onClick={handleCancel}
              className="bg-gray-200 text-black w-full mt-2 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
          )}
        </AddTaskModal>
      </div>
      {/* end of mobile view */}
      {/* Task List */}
      <div
        className="min-h-2.5 p-4 bg-white/40 w-[80%] m-auto rounded-b-2xl max-h-138.5 overflow-y-auto 
                scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent"
      >
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
              className={`p-4 rounded-xl mb-3 border transition-all duration-300 flex justify-between items-center ${
                task.completed
                  ? "bg-green-500 border-green-600 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            >
              <div>
                <h1 className="font-bold text-lg">{task.title}</h1>
                <p className="text-sm opacity-70">{task.description}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    toggleTask(task.id);
                  }}
                  className="bg-black text-white text-2xl p-1.5 m-1 md:p-3 md:m-2.5 rounded-full md:cursor-pointer"
                >
                  {task.completed ? <IoArrowBackCircle /> : <MdDoneOutline />}
                </button>
                <button
                  onClick={() => {
                    handleDeleteTask(task.id);
                  }}
                  className="bg-black text-white text-2xl p-1.5 m-1 md:p-3 md:m-2.5 rounded-full md:cursor-pointer"
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => {
                    handleEditTask(task.id);
                  }}
                  className="bg-black text-white text-2xl p-1.5 m-1 md:p-3 md:m-2.5 rounded-full md:cursor-pointer"
                >
                  <MdOutlineModeEdit />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/*End Of Task List */}

      {/* Desktop View */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full justify-center pb-4 z-50">
        <form
          className="flex flex-col justify-end items-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div
            className={`bg-white rounded-4xl shadow-2xl w-200 transition-all duration-300 ${
              isEditing
                ? "border-2 border-blue-400 shadow-blue-200"
                : "border-2 border-transparent"
            }`}
          >
            <h1 className="mr-auto p-2.5 text-2xl font-extrabold text-center">
              {isEditing ? "Edit Task" : "Add New Task"}
            </h1>
            <div className="flex gap-10 justify-evenly items-center pb-4">
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
                className="border w-70 h-12 rounded-xl mb-3 p-2 focus:h-15 duration-600 focus:text-left focus:placeholder:text-white focus:placeholder:duration-300"
              />
              <div className="flex flex-col gap-2 mb-3">
                <button
                  onClick={handleSave}
                  className="bg-black text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  {isEditing ? "Update" : "Save"}
                </button>
                {isEditing && (
                  <button
                    onClick={handleCancel}
                    className="bg-gray-200 text-black px-6 py-2 cursor-pointer rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* end of desktop view */}
    </div>
  );
};
