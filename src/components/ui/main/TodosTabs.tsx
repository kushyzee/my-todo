import { useTodo } from "@/hooks/customHook";
import { Card, CardContent } from "../card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import AllTodos from "./AllTodos";

export default function TodosTabs() {
  const { todos } = useTodo();

  return (
    <Card>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All ({todos.length})</TabsTrigger>
            <TabsTrigger value="active">Active (5)</TabsTrigger>
            <TabsTrigger value="completed">Completed (0)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <AllTodos />
          </TabsContent>
          <TabsContent value="active">Active</TabsContent>
          <TabsContent value="completed">Completed</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
