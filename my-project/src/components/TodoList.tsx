import type { Todo, TodoComponentActions } from "../types/Todo";
import TodoComponent from "./TodoComponent";

interface TodoListProps {
  todos: Todo[];
  actions: TodoComponentActions;
}
export default function TodoList({ todos, actions }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoComponent todo={todo} actions={actions} />
      ))}
    </ul>
  );
}
