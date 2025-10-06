export interface Todos {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type Action =
  | { type: "ADD_TODO"; payload: Todos }
  | { type: "COMPLETE_TODO"; payload: { id: number; checked: boolean } }
  | { type: "UPDATE_TODO"; payload: { id: number } }
  | { type: "DELETE_TODO"; payload: { id: number } }
  | { type: "CLEAR_COMPLETED"; payload?: null };
