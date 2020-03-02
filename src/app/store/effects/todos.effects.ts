import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodosActionTypes, AddTodo, AddTodoSuccess } from '../actions/todos.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos/todos.service';


@Injectable()
export class TodosEffects {
 
  constructor(
    private actions: Actions, private todosServices: TodosService
  ) {}

  @Effect()
  AddTodo: Observable<any> = this.actions.pipe(
    ofType(TodosActionTypes.ADD_TODO),
    map((action: AddTodo) => action.payload),
    switchMap(payload => {
      return this.todosServices.addTodo(payload).pipe(
        map((user) => {
          return new AddTodoSuccess(payload);
        }),
        // catchError((error) => {
        //   return of(new LogInFailure({ error }));
        // })
        );
    }));
}