import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

import { Todo } from '*/json/todo.json';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = []

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.getTodoList()
  }

  getTodoList() {
    this.todoListService.getTodoList().subscribe(todoList => {
      this.todoList = todoList;
    })
  }

  deleteTodo() {

  }
}
