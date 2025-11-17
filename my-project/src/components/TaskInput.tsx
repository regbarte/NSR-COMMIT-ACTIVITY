interface TaskInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  maxLength?: number;
}

export default function TaskInput({
  value,
  onChange,
  onAdd,
  maxLength = 100,
}: TaskInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  const remainingChars = maxLength - value.length;
  const isNearLimit = remainingChars <= 20;

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            maxLength={maxLength}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            aria-label="New task input"
          />
          {isNearLimit && (
            <span
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium ${
                remainingChars <= 10 ? "text-red-500" : "text-amber-500"
              }`}
            >
              {remainingChars}
            </span>
          )}
        </div>
        <button
          onClick={onAdd}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!value.trim()}
          aria-label="Add task"
        >
          Add
        </button>
      </div>
      <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
        <span>Press Enter to add task</span>
        <span>
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}
