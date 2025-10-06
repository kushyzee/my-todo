import type { Todos } from "@/types/myTypes";
import { useState, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todos[]>([]);

  return <TodoContext value={{ todos, setTodos }}>{children}</TodoContext>;
}
