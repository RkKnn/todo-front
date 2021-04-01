import { Component, Input, OnInit } from '@angular/core';
import { IncompleteTodo } from '*/json/todo.json';
import { HttpClient } from '@angular/common/http';
import { Backend } from '../app.module';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit {
  @Input() todo: IncompleteTodo = {categoryId: 0, title: '', body: '', state: 'ACTIVE'};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.http.post(Backend.url('register'), this.todo).subscribe();
  }
}
