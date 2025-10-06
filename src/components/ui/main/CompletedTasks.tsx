import TabContentWrapper from "./TabContentWrapper";
import { useTodo } from "@/hooks/customHook";
import TodoItem from "./TodoItem";
import EmptyTask from "./EmptyTask";

export default function CompletedTasks() {
  const { todos } = useTodo();

  const filteredTasks = todos.filter((todo) => todo.isCompleted);

  return (
    <TabContentWrapper>
      {filteredTasks.length === 0 ? (
        <EmptyTask message="No completed tasks" />
      ) : (
        filteredTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            todoText={todo.text}
            todoId={todo.id}
            todoCompleted={todo.isCompleted}
          />
        ))
      )}
    </TabContentWrapper>
  );
}
