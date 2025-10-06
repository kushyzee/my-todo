import { useState } from "react";
import { Card, CardContent } from "../card";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import { Edit, Trash2 } from "lucide-react";
import { useTodo } from "@/hooks/customHook";

interface TodoItemProps {
  todoText: string;
  todoId: number;
}

export default function TodoItem({ todoText, todoId }: TodoItemProps) {
  const { todos, setTodos } = useTodo();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);

    todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isCompleted = checked;
      }
    });
  };
  console.log(todos);

  return (
    <Card className="py-4 bg-secondary ">
      <CardContent className="px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Checkbox
            className="cursor-pointer"
            checked={isChecked}
            onCheckedChange={(checked: boolean) => {
              handleCheckedChange(checked);
            }}
          />
          <p>{todoText}</p>
        </div>
        <div className="flex">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Edit</span>
            <Edit />
          </Button>
          <Button variant="ghost" size="icon">
            <span className="sr-only">Delete</span>
            <Trash2 className="text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
