import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export const HomePage = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: "", description: "" });

  function HandleAddTaskBtn() {
    if (!task.title.trim()) return;
    const newTask = { title: task.title, description: task.description, id: Date.now() };
    setTasks([...tasks, newTask]);
    setTask({ title: "", description: "" });
    setShowAddTask(false);
  }

  return (
    <div className="bg-cyan-950 h-dvh w-full relative overflow-hidden flex flex-col">
      
      <div className="flex-1 overflow-y-auto p-6 pb-32"> 
        <h1 className="text-white text-3xl font-bold mb-6 text-center">My Tasks</h1>
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
          {tasks.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white w-[80%] m-auto">
              <h3 className="font-bold text-lg">{t.title}</h3>
              <p className="opacity-70 text-sm">{t.description}</p>
            </div>
          ))}
          {tasks.length === 0 && (
            <p className="text-white/30 text-center mt-10 text-sm">No tasks yet. Tap the + to start!</p>
          )}
        </div>
      </div>

    
      <button
        onClick={() => setShowAddTask(true)}
        className="fixed bottom-40 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all z-50"
      >
        <IoMdAdd size={35} />
      </button>

    
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-60 ${
          showAddTask ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowAddTask(false)}
      />

  
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white p-6 rounded-b-3xl shadow-2xl transition-all duration-500 ease-in-out transform z-70 ${
          showAddTask ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add New Task</h2>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task title"
          className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Description"
          className="w-full h-24 border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-600 resize-none"
        />
        <div className="flex gap-3">
          <button onClick={() => setShowAddTask(false)} className="flex-1 bg-gray-100 py-3 rounded-xl font-semibold">Cancel</button>
          <button onClick={HandleAddTaskBtn} className="flex-1 bg-black text-white py-3 rounded-xl font-bold">Add</button>
        </div>
      </div>
    </div>
  );
};