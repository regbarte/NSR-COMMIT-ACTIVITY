import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

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

        {/* Filters */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex rounded-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-sm transition ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3 py-1.5 text-sm transition border-l border-gray-200 ${
                filter === 'active'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1.5 text-sm transition border-l border-gray-200 ${
                filter === 'completed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Completed
            </button>
          </div>
          <span className="text-xs text-gray-500">
            {filteredTodos.length} shown / {todos.length} total
          </span>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center text-gray-500">
              No tasks yet. Add one to get started!
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 hover:shadow-sm transition"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-1 cursor-pointer select-none ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
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
