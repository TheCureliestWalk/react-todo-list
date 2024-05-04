export interface Todo {
  id: number;
  title: string;
  description?: string;
  isComplete: boolean;
}

export interface AddTodo {
  addTodo: AddTodo;
  todos: Todo[];
}

export enum TodoFilter {
  ALL = "all",
  COMPLETED = "completed",
  INCOMPLETE = "incomplete",
}
