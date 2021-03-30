declare module '*/json/todo.json' {
  export interface Todo {
    id: number;
    categoryId: number;
    title: string;
    body: string;
    state: string;
    updatedAt: Date;
    createdAt: Date;
  }

  export interface TodoList {
    todo: Todo[];
  }
}