import { useTodo } from "@/hooks/customHook";
import { Card, CardContent } from "../card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import AllTasks from "./AllTasks";
import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";

export default function TasksTabs() {
  const { todos } = useTodo();

  const allTodosCount = todos.length;
  const activeTodosCount = todos.filter((todo) => !todo.isCompleted).length;
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <Card>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All ({allTodosCount})</TabsTrigger>
            <TabsTrigger value="active">
              Active ({activeTodosCount})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedTodosCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <AllTasks />
          </TabsContent>
          <TabsContent value="active">
            <ActiveTasks />
          </TabsContent>
          <TabsContent value="completed">
            <CompletedTasks />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
