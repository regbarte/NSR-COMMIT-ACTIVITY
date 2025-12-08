export interface Todo {
  id: number;
  t: string;
  d: string;
  done: boolean;
}

export interface TodoComponentActions {
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
