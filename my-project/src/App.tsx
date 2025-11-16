import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          To-Do List
        </h1>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-6 space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-slate-500">No tasks yet.</p>
          )}

          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-lg"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`flex-1 cursor-pointer ${
                  task.done ? "line-through text-slate-400" : "text-slate-700"
                }`}
              >
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
