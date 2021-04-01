import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

import { Todo, WithCheckbox } from '*/json/todo.json';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: WithCheckbox<Todo>[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoListService.getTodoList().subscribe(todoList => {
      this.todoList = todoList.map(todo => ({item: todo, checked: false} as WithCheckbox<Todo>));
    });
  }

  deleteTodo(): void {
    const ids = this.todoList.filter(value => value.checked).map(value => value.item.id);
    this.todoListService.deleteTodoList(ids).subscribe();
  }
}
