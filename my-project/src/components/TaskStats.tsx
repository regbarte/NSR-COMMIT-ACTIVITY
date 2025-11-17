interface TaskStatsProps {
  totalTasks: number;
  completedTasks: number;
  remainingTasks: number;
}

export default function TaskStats({
  totalTasks,
  completedTasks,
  remainingTasks,
}: TaskStatsProps) {
  if (totalTasks === 0) return null;

  return (
    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between text-sm text-gray-600">
      <span>
        {remainingTasks} task{remainingTasks !== 1 ? "s" : ""} remaining
      </span>
      <span>{completedTasks} completed</span>
    </div>
  );
}
