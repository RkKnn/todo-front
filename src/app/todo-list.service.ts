import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoList } from '*/json/todo.json';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<TodoList> {
    return this.http.get<TodoList>('http://localhost:4200/api/todos');
  }
}
