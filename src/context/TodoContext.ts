import type { Todos } from "@/types/myTypes";
import { createContext, type Dispatch, type SetStateAction } from "react";

interface ContextObject {
  todos: Todos[];
  setTodos: Dispatch<SetStateAction<Todos[]>>;
}

export const TodoContext = createContext<ContextObject | null>(null);
