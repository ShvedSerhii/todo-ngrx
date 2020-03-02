import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todos.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import * as TodoActions from './../../store/actions/todos.actions';
import { getTodos } from 'src/app/store/selectors/todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  public todos$: Observable<Array<Todo>>;
  public SelectedFilter: boolean;
  constructor(private store: Store<IAppState>) {
    this.todos$ = this.store.pipe(select(getTodos));
    this.store.subscribe((state) => {
      console.log('state', state);
    }); 
  }

  onAddTodo(newTodo) {
      this.store.dispatch(new TodoActions.AddTodo(newTodo.text));
  }

  onCompletedTodo(todo) {
    this.store.dispatch(new TodoActions.CompleteTodo(todo));
  }

  onDeletedTodo(todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
  }

  onUpdateTodo(todo) {
    this.store.dispatch(new TodoActions.UpdateTodo(todo));
  }
  onEditTodo(todo) {
    this.store.dispatch(new TodoActions.EditTodo(todo));
  }

  onShow(filter) {
    this.store.dispatch(new TodoActions[filter]());
  }

}