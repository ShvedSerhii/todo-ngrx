import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todos.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  @Input() todos: Array<Todo>;
  @Output() completedTodo: EventEmitter<Todo>;
  @Output() deletedTodo: EventEmitter<Todo>;
  @Output() editTodo: EventEmitter<Todo>;
  @Output() updateTodo: EventEmitter<Todo>;

  constructor() {
    this.completedTodo = new EventEmitter<Todo>();
    this.deletedTodo = new EventEmitter<Todo>();
    this.editTodo = new EventEmitter<Todo>();
    this.updateTodo = new EventEmitter<Todo>();
  }

  onCompletedTodo(todo) {
    this.completedTodo.emit(todo);
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
