import type { Todos } from "@/types/myTypes";
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface ContextObject {
  todos: Todos[];
  setTodos: Dispatch<SetStateAction<Todos[]>>;
}

const TodoContext = createContext<ContextObject | null>(null);

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todos[]>([]);

  return <TodoContext value={{ todos, setTodos }}>{children}</TodoContext>;
}
