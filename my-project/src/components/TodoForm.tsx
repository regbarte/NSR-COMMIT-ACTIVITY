import { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string, date: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleAddTodo = () => {
    addTodo(text, date);
    setText("");
    setDate("");
  };
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </>
  );
}
