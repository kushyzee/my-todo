import type { Action, Todos } from "@/types/myTypes";

export const cartReducer = (todos: Todos[], action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO": {
      return [...todos, payload];
    }

    case "COMPLETE_TODO": {
      return todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: payload.checked }
          : todo
      );
    }

    case "DELETE_TODO": {
      return todos.filter((todo) => todo.id !== payload.id);
    }

    default:
      return todos;
  }
};
