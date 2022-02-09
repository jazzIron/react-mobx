export interface TodoData {
  id: number;
  content: string;
  checked: boolean;
}

export interface Todo {
  todoData: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
  checkTodoToggle: (id: number) => void;
}
