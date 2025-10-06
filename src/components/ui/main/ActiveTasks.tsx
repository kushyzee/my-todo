import TabContentWrapper from "./TabContentWrapper";
import { useTodo } from "@/hooks/customHook";
import TodoItem from "./TodoItem";

export default function ActiveTasks() {
  const { todos } = useTodo();

  return (
    <TabContentWrapper>
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todoText={todo.text}
            todoId={todo.id}
            todoCompleted={todo.isCompleted}
          />
        ))}
    </TabContentWrapper>
  );
}
