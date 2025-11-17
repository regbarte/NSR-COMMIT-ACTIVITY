import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import TaskInput from "./components/TaskInput";
import EmptyState from "./components/EmptyState";
import TaskStats from "./components/TaskStats";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

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

  const completedCount = todos.filter((todo) => todo.completed).length;
  const remainingCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            My To-Do List
          </h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Input Section */}
        <TaskInput
          value={input}
          onChange={setInput}
          onAdd={addTodo}
          maxLength={100}
        />

        {/* Task List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="space-y-2" role="list">
              {todos.map((todo) => (
                <TaskCard
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer Stats */}
        <TaskStats
          totalTasks={todos.length}
          completedTasks={completedCount}
          remainingTasks={remainingCount}
        />
      </div>
    </div>
  );
}

export default App;
