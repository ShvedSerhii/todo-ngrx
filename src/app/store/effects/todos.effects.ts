import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodosActionTypes, AddTodo, GetTodos, SetTodos, DeleteTodo, UpdateTodo } from '../actions/todos.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos/todos.service';
import { Todo } from 'src/app/models/todos.model';


@Injectable()
export class TodosEffects {

  constructor(
    private actions: Actions, private todosServices: TodosService
  ) {}

  @Effect()
  GetTodo: Observable<any> = this.actions.pipe(
    ofType(TodosActionTypes.GET_TODOS),
    map((action: GetTodos) => action),
    switchMap(() => {
      return this.todosServices.getTodos().pipe(
        map((data) => {
          return new SetTodos(data);
        }),
        // catchError((error) => {
        //   return of(new LogInFailure({ error }));
        // })
        );
    }));

  @Effect()
  AddTodo: Observable<any> = this.actions.pipe(
    ofType(TodosActionTypes.ADD_TODO),
    map((action: AddTodo) => action.payload),
    switchMap(payload => {
      return this.todosServices.addTodo(payload).pipe(
        map(() => {
          return new GetTodos();
        }),
        // catchError((error) => {
        //   return of(new LogInFailure({ error }));
        // })
        );
    }));

    @Effect()
    DeleteTodo: Observable<any> = this.actions.pipe(
      ofType(TodosActionTypes.DELETE_TODO),
      map((action: DeleteTodo) => action.payload),
      switchMap(payload => {
        return this.todosServices.deleteTodo(payload).pipe(
          map(() => {
            return new GetTodos();
          }),
          // catchError((error) => {
          //   return of(new LogInFailure({ error }));
          // })
          );
      }));

      @Effect()
      UpdateTodo: Observable<any> = this.actions.pipe(
        ofType(TodosActionTypes.UPDATE_TODO),
        map((action: UpdateTodo) => action.payload),
        switchMap(payload => {
          return this.todosServices.updateTodo(payload).pipe(
            map(() => {
              return new GetTodos();
            }),
            // catchError((error) => {
            //   return of(new LogInFailure({ error }));
            // })
            );
        }));

}
