import type { Todos } from "@/types/myTypes";
import { useReducer, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import { cartReducer } from "./cartReducer";

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(cartReducer, []);

  return <TodoContext value={{ todos, dispatch }}>{children}</TodoContext>;
}
