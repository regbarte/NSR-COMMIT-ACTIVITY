interface TaskCardProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TaskCardProps) {
  return (
    <li
      className={`flex items-start justify-between p-4 rounded-lg border transition-all duration-200 group ${
        completed
          ? "bg-green-50 border-green-200 hover:shadow-md hover:bg-green-100"
          : "bg-gray-50 border-gray-200 hover:shadow-md"
      }`}
    >
      <div
        onClick={() => onToggle(id)}
        className="flex items-start flex-1 cursor-pointer min-w-0 mr-2"
        role="button"
        tabIndex={0}
        aria-label={`Toggle task: ${text}`}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onToggle(id);
          }
        }}
      >
        <div
          className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
            completed
              ? "bg-green-600 border-green-600"
              : "border-gray-300 group-hover:border-indigo-400"
          }`}
        >
          {completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span
          className={`text-gray-800 transition-all ${
            completed
              ? "line-through text-gray-500"
              : "group-hover:text-indigo-600"
          }`}
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
          }}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="ml-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 shrink-0"
        aria-label={`Delete task: ${text}`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </li>
  );
}
