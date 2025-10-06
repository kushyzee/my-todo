import type { Action, Todos } from "@/types/myTypes";
import { createContext, type Dispatch } from "react";

interface ContextObject {
  todos: Todos[];
  dispatch: Dispatch<Action>;
}

export const TodoContext = createContext<ContextObject | null>(null);
