import { useTodo } from "@/hooks/customHook";
import { Button } from "../button";

export default function ClearCompletedTasks() {
  const { dispatch } = useTodo();

  return (
    <div>
      <Button
        className="text-destructive cursor-pointer hover:text-destructive/85 transition-colors duration-200 ease-in-out"
        variant="outline"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear Completed
      </Button>
    </div>
  );
}
