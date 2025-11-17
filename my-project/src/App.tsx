import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: "high" | "low";
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<"high" | "low">("low");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        priority: priority,
      },
    ]);
    setInput("");
    setPriority("low");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
          <p className="text-gray-500 mt-1">
            Stay organized and productive with a clean, simple todo list.
          </p>
        </header>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as "high" | "low")}
            className="px-2 py-2 border border-gray-300 rounded-lg"
          >
            <option value="low">
              Low
            </option>
            
            <option value="high">
              High
            </option>
          </select>

          <button
            onClick={addTodo}
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {todos.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center text-gray-500">
              No tasks yet. Add one to get started!
            </div>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 hover:shadow-sm transition"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex items-center gap-2 flex-1 cursor-pointer select-none ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.priority === "high" ? (
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-md border border-red-300">
                      HIGH
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded-md border border-gray-300">
                      LOW
                    </span>
                  )}
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="ml-3 text-red-500 hover:text-red-700 transition"
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
