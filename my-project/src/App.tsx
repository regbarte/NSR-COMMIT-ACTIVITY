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

  return (
    <div
      style={{
        backgroundColor: "pink",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Comic Sans MS",
      }}
    >
      <div
        style={{
          width: "700px",
          backgroundColor: "lime",
          border: "10px dashed red",
          padding: "50px",
          boxShadow: "10px 10px 20px purple",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: "60px",
            color: "orange",
            textAlign: "left",
            marginBottom: "40px",
          }}
        >
          My Tasks!!!
        </h1>
        <p
          style={{
            backgroundColor: "yellow",
            color: "blue",
            fontStyle: "italic",
            padding: "10px",
            border: "5px solid black",
          }}
        >
        </p>

        {/* Input */}
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            style={{
              border: "5px solid green",
              padding: "20px",
              fontSize: "25px",
              backgroundColor: "cyan",
              width: "60%",
            }}
          />
          <button
            onClick={addTodo}
            style={{
              marginLeft: "20px",
              padding: "20px",
              backgroundColor: "purple",
              color: "orange",
              fontSize: "30px",
              borderRadius: "0px",
              border: "5px dotted black",
            }}
          >
            ADD HERE!!!
          </button>
        </div>

        {/* Task List */}
        <ul style={{ listStyleType: "square", padding: "0" }}>
          {todos.length === 0 ? (
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "30px",
                textAlign: "center",
                fontSize: "25px",
              }}
            >
              No tasks yet. Ano ka tamad?!!!
            </div>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  margin: "25px",
                  padding: "10px",
                  border: "10px groove pink",
                  backgroundColor: "lightgreen",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "22px",
                }}
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    cursor: "pointer",
                    textDecoration: todo.completed
                      ? "underline overline line-through"
                      : "none",
                    color: todo.completed ? "brown" : "magenta",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{
                    marginLeft: "20px",
                    color: "red",
                    fontSize: "25px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
