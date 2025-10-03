import { Plus, SquareCheckBig } from "lucide-react";
import { Card, CardContent } from "../card";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import EmptyState from "./EmptyState";

export default function MyTodos() {
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
            <form action="">
              <Label className="sr-only" htmlFor="todo">
                Add a new todo
              </Label>
              <div className="flex gap-2">
                <Input
                  className="h-10"
                  id="todo"
                  placeholder="What needs to be done?"
                  required
                />
                <Button type="submit" className="whitespace-nowrap" size="lg">
                  <Plus className="size-5" />
                  <span className="sr-only md:not-sr-only">Add Todo</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Todos section */}
      <section className="mt-6">
        <EmptyState />
      </section>
    </div>
  );
}
