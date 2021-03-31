import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo, Category, MapJson } from '*/json/todo.json';
import { Backend } from './app.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(Backend.url('todos'));
  }

  getCategoryRef(categoryIdsFromTodo: number[]): Observable<Map<number, Category>> {
    return this.http.post<Map<number, Category>>(Backend.url('categoryRef'), categoryIdsFromTodo).pipe(
      map(entries => new Map(entries))
    );
  }

  deleteTodoList(ids: number[]): Observable<void> {
    return this.http.post<void>(Backend.url('delete'), ids);
  }
}
