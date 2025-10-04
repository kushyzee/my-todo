import TabContentWrapper from "./TabContentWrapper";
import TodoItem from "./TodoItem";

export default function AllTodos() {
  return (
    <TabContentWrapper>
      <TodoItem todoText="Learn React" />
      <TodoItem todoText="Go to work" />
    </TabContentWrapper>
  );
}
