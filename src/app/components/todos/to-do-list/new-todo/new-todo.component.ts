import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todos.model';
import NewTodoForm from './new-todo.form';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Output() onCreateTodo;
  public model: Todo;
  public form: NewTodoForm;
  constructor() {
    this.model = new Todo();
    this.form = new NewTodoForm(this.model);
    this.onCreateTodo = new EventEmitter();
  }

  ngOnInit() {}

  onSaveTodo() {
    this.onCreateTodo.emit(this.model);
  }
}
