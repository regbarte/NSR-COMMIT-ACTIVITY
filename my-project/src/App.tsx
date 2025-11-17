import React from "react";
import "./App.css";
import type { Todo } from "./types/Todo";
import TodoForm from "./components/TodoForm";
import TodoCalendar from "./components/TodoCalendar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function addTodo(text: string, date: string) {
    setTodos((prev) => {
      return [...prev, { id: Math.random(), t: text, done: false, d: date }];
    });
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((x: Todo) => x.id !== id));
  }

  return (
    <div style={{ background: "pink", minHeight: "100vh" }}>
      <h1>Tasks lol</h1>
      {/* Added a todo form component */}
      <TodoForm addTodo={addTodo} />
      {/* Added a todo list component */}
      <TodoList
        todos={todos}
        actions={{
          toggleTodo,
          deleteTodo,
        }}
      />
      {/* Fake calendar: just dump dates in a grid */}
      <TodoCalendar todos={todos} />
    </div>
  );
}

export default App;
