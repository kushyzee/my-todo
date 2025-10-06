import type { Todos } from "@/types/myTypes";
import { useEffect, useReducer, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import { cartReducer } from "./cartReducer";

export default function TodoProvider({ children }: { children: ReactNode }) {
  const initializer = (initialTodos: Todos[]) => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : initialTodos;
    } catch (error) {
      return initialTodos;
    }
  };

  const [todos, dispatch] = useReducer(cartReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodoContext value={{ todos, dispatch }}>{children}</TodoContext>;
}
