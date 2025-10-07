import { TodoContext } from "@/context/TodoContext";
import type { Action, Todos } from "@/types/myTypes";
import { isInValidField } from "@/utility/functions";
import { useContext, useState, type Dispatch } from "react";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
};

export const useFormError = () => {
  const [formError, setFormError] = useState("");

  const updateFormError = (message: string) => {
    setFormError(message);
  };

  const resetFormError = () => {
    setFormError("");
  };

  return { formError, updateFormError, resetFormError };
};

export const useForm = (
  updateFormError: (message: string) => void,
  resetFormError: () => void,
  dispatch: Dispatch<Action>
) => {
  const handleFormSubmit = (
    formData: FormData,
    name: "todo" | "new-todo",
    dispatchType: "ADD_TODO" | "UPDATE_TODO",
    isCompleted: boolean = false,
    todoId: number = Date.now()
  ) => {
    const inputValue = formData.get(name) as string;

    if (isInValidField(inputValue)) {
      updateFormError("Todo cannot be empty");
      return;
    }

    const newTodo: Todos = {
      id: todoId,
      text: inputValue,
      isCompleted,
    };

    dispatch({ type: dispatchType, payload: newTodo });

    resetFormError();
  };

  return handleFormSubmit;
};
