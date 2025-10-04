import { useState } from "react";
import { Card, CardContent } from "../card";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import { Edit, Trash2 } from "lucide-react";

interface TodoItemProps {
  todoText: string;
}

export default function TodoItem({ todoText }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card className="py-4 bg-secondary ">
      <CardContent className="px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Checkbox
            className="cursor-pointer"
            checked={isChecked}
            onCheckedChange={(checked: boolean) => {
              setIsChecked(checked);
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
