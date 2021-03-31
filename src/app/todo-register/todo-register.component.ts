import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category, IncompleteTodo } from '*/json/todo.json';
import { HttpClient } from '@angular/common/http';
import { Backend } from '../app.module';
import { CategoryService } from '../category.service';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit {
  @Input() todo: IncompleteTodo = {categoryId: 1, title: '', body: '', state: 'ACTIVE'};
  @Output() registerEvent = new EventEmitter();

  categories: Category[] = [];

  constructor(private http: HttpClient, private todoListService: TodoListService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  addTodo(): void {
    this.todoListService.addTodo(this.todo).subscribe(() => this.registerEvent.emit());
  }
}
