import type { Todo } from "../types/Todo";

interface TodoCalendarProps {
  todos: Todo[];
}
export default function TodoCalendar({ todos }: TodoCalendarProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "5px",
        marginTop: "20px",
      }}
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} style={{ border: "1px solid black", padding: "10px" }}>
          {i + 1}
          <div>
            {todos
              .filter((t: Todo) => parseInt(t.d.split("-")[2]) === i + 1)
              .map((t: Todo) => (
                <div key={t.id} style={{ fontSize: "10px" }}>
                  {t.t}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
