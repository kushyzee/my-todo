import { TodoContext } from "@/context/TodoContext";
import { useContext, useState } from "react";

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
