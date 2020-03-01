import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todos.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  @Input()  todo: Todo;
  @Output() compeletedTodo: EventEmitter<Todo>;
  @Output() deletedTodo: EventEmitter<Todo>;
  @Output() editTodo: EventEmitter<Todo>;
  @Output() updateTodo: EventEmitter<Todo>;

  constructor() {
    this.compeletedTodo = new EventEmitter<Todo>();
    this.deletedTodo = new EventEmitter<Todo>();
    this.editTodo    = new EventEmitter<Todo>();
    this.updateTodo = new EventEmitter<Todo>();
  }

  ngOnInit() {
  }

  onCompletedTodo(todo) {
    this.compeletedTodo.emit(todo);
  }

  onDeletedTodo(todo) {
    this.deletedTodo.emit(todo);
  }

  onEditTodo(todo) {
    this.editTodo.emit(todo);
  }

  onUpdateTodo(todo) {
    this.updateTodo.emit(todo);
  }
}
