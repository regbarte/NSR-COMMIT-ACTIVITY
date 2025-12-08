import type { Todo, TodoComponentActions } from "../types/Todo";

interface TodoComponentProps {
  todo: Todo;
  actions: TodoComponentActions;
}

export default function TodoComponent({ todo, actions }: TodoComponentProps) {
  return (
    <li key={todo.id}>
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "gray" : "black",
        }}
        onClick={() => actions.toggleTodo(todo.id)}
      >
        {todo.t} (due {todo.d ? todo.d : "no date"})
      </span>
      <button onClick={() => actions.deleteTodo(todo.id)}>X</button>
    </li>
  );
}
