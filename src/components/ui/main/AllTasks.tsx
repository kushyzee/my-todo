import { useTodo } from "@/hooks/customHook";
import TabContentWrapper from "./TabContentWrapper";
import TodoItem from "./TodoItem";

export default function AllTasks() {
  const { todos } = useTodo();

  return (
    <TabContentWrapper>
      {todos.map((todo) => (
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
