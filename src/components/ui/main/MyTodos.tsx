import { Plus, SquareCheckBig } from "lucide-react";
import { Card, CardContent } from "../card";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import EmptyState from "./EmptyState";
import TodosTabs from "./TodosTabs";
import { useFormError, useTodo } from "@/hooks/customHook";
import { isArrayEmpty, isInValidField } from "@/utility/functions";
import type { Todos } from "@/types/myTypes";

export default function MyTodos() {
  const { todos, dispatch } = useTodo();

  const { formError, resetFormError, updateFormError } = useFormError();

  const handleFormSubmit = (formData: FormData) => {
    const inputValue = formData.get("todo") as string;

    if (isInValidField(inputValue)) {
      updateFormError("Todo cannot be empty");
      return;
    }

    const newTodo: Todos = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });

    resetFormError();
  };

  return (
    <div>
      {/* Hero section */}
      <section>
        <div className="mb-8">
          <div className="flex items-center gap-2 justify-center mb-3">
            <div className="bg-gradient-to-br from-primary to-fuchsia-500 inline-block p-3 rounded-xl">
              <SquareCheckBig className="text-background size-6 md:size-8" />
            </div>
            <h1 className="text-3xl md:text-4xl text-primary font-bold">
              My Todos
            </h1>
          </div>
          <p className="text-lg text-center text-heading">
            Organize your tasks and boost your productivity
          </p>
        </div>

        <Card>
          <CardContent>
            <form action={handleFormSubmit}>
              <Label className="sr-only" htmlFor="todo">
                Add a new todo
              </Label>
              <div className="flex gap-2">
                <Input
                  className="h-10"
                  id="todo"
                  name="todo"
                  onChange={() => {
                    resetFormError();
                  }}
                  placeholder="What needs to be done?"
                />
                <Button
                  type="submit"
                  className="whitespace-nowrap cursor-pointer"
                  size="lg"
                >
                  <Plus className="size-5" />
                  <span className="sr-only md:not-sr-only">Add Todo</span>
                </Button>
              </div>
            </form>
            {formError && (
              <p className="text-destructive text-sm mt-1">{formError}</p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Todos section */}
      <section className="mt-6">
        {isArrayEmpty(todos) ? <EmptyState /> : <TodosTabs />}
      </section>
    </div>
  );
}
