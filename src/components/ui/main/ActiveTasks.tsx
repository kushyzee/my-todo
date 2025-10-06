import TabContentWrapper from "./TabContentWrapper";
import { useTodo } from "@/hooks/customHook";
import TodoItem from "./TodoItem";
import EmptyTask from "./EmptyTask";

export default function ActiveTasks() {
  const { todos } = useTodo();

  const filterdTodo = todos.filter((todo) => !todo.isCompleted);

  return (
    <TabContentWrapper>
      {filterdTodo.length === 0 ? (
        <EmptyTask message="No active tasks" />
      ) : null}
      {filterdTodo.map((todo) => (
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
