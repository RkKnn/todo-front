import { Component, Input, OnInit } from '@angular/core';
import { IncompleteTodo } from '*/json/todo.json';
import { HttpClient } from '@angular/common/http';
import { Backend } from '../app.module';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit {
  @Input() todo: IncompleteTodo = {categoryId: 0, title: "", body: "", state: "ACTIVE", csrfToken: "4709a99b439901a8cd78301366e21449062450aa-1617077443353-a275dc256211d3d08c159400"};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addTodo() {
    this.http.post(Backend.url('register'), this.todo).subscribe(value => {
      console.log(value);
    });
  }
}
