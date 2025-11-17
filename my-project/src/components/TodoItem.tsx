import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  editText: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onStartEdit: (id: number, text: string) => void;
  onSaveEdit: (id: number) => void;
  onCancelEdit: () => void;
  onEditTextChange: (text: string) => void;
}

export const TodoItem = ({
  todo,
  isEditing,
  editText,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTextChange,
}: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 hover:shadow-sm transition">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => onEditTextChange(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoFocus
          />
          <div className="flex gap-2 ml-3">
            <button
              onClick={() => onSaveEdit(todo.id)}
              className="text-green-500 hover:text-green-700 transition"
              title="Save"
            >
              ✓
            </button>
            <button
              onClick={onCancelEdit}
              className="text-gray-500 hover:text-gray-700 transition"
              title="Cancel"
            >
              ✕
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(todo.id)}
            className={`flex-1 cursor-pointer select-none ${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2 ml-3">
            <button
              onClick={() => onStartEdit(todo.id, todo.text)}
              className="text-blue-500 hover:text-blue-700 transition"
              title="Edit"
            >
              ✎
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700 transition"
              title="Delete"
            >
              ✕
            </button>
          </div>
        </>
      )}
    </li>
  );
};

