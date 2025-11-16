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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {stuff.map((todo: any) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "gray" : "black",
              }}
              onClick={() => toggleTodo(todo)}
            >
              {todo.t} (due {todo.d})
            </span>
            <button onClick={() => deleteTodo(todo)}>X</button>
          </li>
        ))}
      </ul>

      {/* Fake calendar: just dump dates in a grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px", marginTop: "20px" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{ border: "1px solid black", padding: "10px" }}>
            {i + 1}
            <div>
              {stuff
                .filter((t: any) => parseInt(t.d.split("-")[2]) === i + 1)
                .map((t: any) => (
                  <div key={t.id} style={{ fontSize: "10px" }}>
                    {t.t}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
