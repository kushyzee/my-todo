import { Check, X } from "lucide-react";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Label } from "../label";
import { useForm, useFormError, useTodo } from "@/hooks/customHook";
import type { TodoItemProps } from "@/types/myTypes";
import { Input } from "../input";

interface UpdatedTaskProps extends TodoItemProps {
  closeForm: () => void;
}

export default function UpdatedTask({
  todoText,
  todoId,
  todoCompleted,
  closeForm,
}: UpdatedTaskProps) {
  const { dispatch } = useTodo();
  const { updateFormError, resetFormError } = useFormError();

  const handleFormSubmit = useForm(updateFormError, resetFormError, dispatch);

  const handleSubmit = (formData: FormData) => {
    handleFormSubmit(
      formData,
      "new-todo",
      "UPDATE_TODO",
      todoCompleted,
      todoId
    );

    closeForm();
  };

  return (
    <form
      className="px-4 flex justify-between items-center"
      action={handleSubmit}
    >
      <div className="flex items-center gap-3 w-full">
        <Checkbox
          className="cursor-pointer data-[state=checked]:bg-primary/50"
          checked={todoCompleted}
          disabled={true}
        />
        <Label htmlFor={todoId.toString()} className="sr-only">
          Enter new task
        </Label>
        <Input
          defaultValue={todoText}
          name="new-todo"
          placeholder="Enter new task"
        />
      </div>
      <div className="flex ml-2">
        <Button
          className={`cursor-pointer text-primary ${
            todoCompleted ? "opacity-50" : ""
          }`}
          variant="ghost"
          size="icon"
          type="submit"
        >
          <span className="sr-only">Confirm</span>
          <Check />
        </Button>
        <Button
          className={`cursor-pointer ${todoCompleted ? "opacity-50" : ""}`}
          variant="ghost"
          size="icon"
          onClick={closeForm}
        >
          <span className="sr-only">Cancel</span>
          <X className="text-destructive" />
        </Button>
      </div>
    </form>
  );
}
