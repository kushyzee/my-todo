import { SquareCheckBig } from "lucide-react";

export default function MyTodos() {
  return (
    <div>
      {/* Hero section */}
      <section>
        <div>
          <div className="flex items-center gap-2 justify-center mb-2">
            <div className="bg-gradient-to-br from-primary to-fuchsia-500 inline-block p-3 rounded-xl">
              <SquareCheckBig className="text-background size-8 md:size-10" />
            </div>
            <h1 className="text-4xl md:text-5xl text-primary font-bold">
              My Todos
            </h1>
          </div>
          <p className="text-xl text-center">
            Organize your tasks and boost your productivity
          </p>
        </div>
      </section>

      {/* Todos section */}
      <section></section>
    </div>
  );
}
