import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

import { Todo, WithCheckbox, Category } from '*/json/todo.json';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: WithCheckbox<Todo>[] = [];
  categoryRef: Map<number, Category> = new Map();

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoListService.getTodoList().pipe(
      mergeMap(todoList => {
        this.todoList = todoList.map(todo => ({item: todo, checked: false} as WithCheckbox<Todo>));
        return this.todoListService.getCategoryRef(todoList.map(todo => todo.categoryId));
      })
    ).subscribe(categoryRef => {
      this.categoryRef = categoryRef;
    });
  }

  deleteTodo(): void {
    const ids = this.todoList.filter(value => value.checked).map(value => value.item.id);
    this.todoListService.deleteTodoList(ids).subscribe(() => this.todoRefresh());
  }

  todoRefresh(): void {
    this.getTodoList();
  }
}
