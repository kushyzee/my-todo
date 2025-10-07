import { Card, CardContent } from "../card";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import { Edit, Trash2 } from "lucide-react";
import { useTodo } from "@/hooks/customHook";
import { Label } from "../label";
import type { TodoItemProps } from "@/types/myTypes";
import { useState } from "react";
import UpdatedTask from "./UpdatedTask";

export default function TodoItem({
  todoText,
  todoId,
  todoCompleted,
}: TodoItemProps) {
  const { dispatch } = useTodo();

  const [isEditing, setIsEditing] = useState(false);

  const handleCheckedChange = (checked: boolean) => {
    dispatch({ type: "COMPLETE_TODO", payload: { id: todoId, checked } });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id: todoId } });
  };

  const closeForm = () => {
    setIsEditing(false);
  };

  console.log(todoText);

  return (
    <Card className="py-4 bg-secondary group hover:border-primary/40 transition-all duration-200">
      <CardContent>
        {isEditing ? (
          <UpdatedTask
            todoText={todoText}
            todoCompleted={todoCompleted}
            todoId={todoId}
            closeForm={closeForm}
          />
        ) : (
          <div className="px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Checkbox
                className="cursor-pointer data-[state=checked]:bg-primary/50"
                checked={todoCompleted}
                id={todoId.toString()}
                onCheckedChange={(checked: boolean) => {
                  handleCheckedChange(checked);
                }}
              />
              <Label
                htmlFor={todoId.toString()}
                className={`cursor-pointer ${
                  todoCompleted ? "line-through text-muted-foreground" : ""
                }`}
              >
                {todoText}
              </Label>
            </div>
            <div className="flex">
              <Button
                className={`cursor-pointer ${
                  todoCompleted ? "opacity-50" : ""
                }`}
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                <span className="sr-only">Edit</span>
                <Edit />
              </Button>
              <Button
                className={`cursor-pointer ${
                  todoCompleted ? "opacity-50" : ""
                }`}
                variant="ghost"
                size="icon"
                onClick={handleDelete}
              >
                <span className="sr-only">Delete</span>
                <Trash2 className="text-destructive" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
