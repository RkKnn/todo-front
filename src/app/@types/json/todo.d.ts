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

  export interface IncompleteTodo {
    categoryId: number;
    title: string;
    body: string;
    state: string;
  }

  export interface WithCheckbox<T> {
    item: T;
    checked: boolean;
  }
}