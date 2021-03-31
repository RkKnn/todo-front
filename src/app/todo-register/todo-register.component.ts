import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category, IncompleteTodo } from '*/json/todo.json';
import { HttpClient } from '@angular/common/http';
import { Backend } from '../app.module';
import { CategoryService } from '../category.service';
import { TodoListService } from '../todo-list.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit {
  @Input() todo: IncompleteTodo = {categoryId: 1, title: '', body: '', state: ''};
  @Output() registerEvent = new EventEmitter();

  categories: Category[] = [];
  stateTypes: string[] = [];

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private todoListService: TodoListService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getStateTypes();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  getStateTypes(): void {
    this.todoListService.getStateTypes().subscribe(stateTypes => {
      this.stateTypes = stateTypes
      this.todo.state = this.stateTypes[0];
    });
  }

  addTodo(): void {
    this.todoListService.addTodo(this.todo).subscribe(() => {
      this.snackBar.open('saved', 'close', {
        duration: 1000,
      });
      this.registerEvent.emit()
    });
  }
}
