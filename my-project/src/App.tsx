// I don’t even care about imports, just throw everything in
import React from "react";
import "./App.css";

function App() {
  // state is chaos, everything in one giant array of strings
  const [stuff, setStuff] = React.useState<any>([]);
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState("");

  // addTodo doesn’t check anything
  function addTodo() {
    setStuff(stuff.concat([{ id: Math.random(), t: text, done: false, d: date }]));
    setText(""); // maybe clear, maybe not
    // forgot to clear date, oh well... hehe
  }

  // toggle is broken, mutates state directly
  function toggleTodo(todo: any) {
    todo.done = !todo.done;
    setStuff([...stuff]); // hacky re-render
  }

  // delete is slow and ugly
  function deleteTodo(todo: any) {
    setStuff(stuff.filter((x: any) => x !== todo));
  }

  return (
    <div style={{ background: "pink", minHeight: "100vh" }}>
      <h1>Tasks lol</h1>
      // Added a todo form component
      <TodoForm addTodo={addTodo} />

      // Added a todo list component
      <TodoList
        todos={todos}
        actions={{
          toggleTodo,
          deleteTodo,
        }}
      />
      {/* Fake calendar: just dump dates in a grid */}

      // Added a todo calendar component
      <TodoCalendar todos={todos} />
    </div>
  );
}

export default App;
