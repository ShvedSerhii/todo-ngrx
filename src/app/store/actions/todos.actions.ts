import { Action } from '@ngrx/store';
import { Todo } from 'src/app/models/todos.model';

export enum TodosActionTypes {
  SET_TODOS = '[todo] SET_TODO',
  GET_TODOS = '[todo] GET_TODO',
  ADD_TODO = '[todo] ADD_TODO',
  UPDATE_TODO = '[todo] UPDATE_TODO',
  DELETE_TODO = '[todo] DELETE_TODO',
  COMPLETE_TODO = '[todo] COMPLETE_TODO',
  EDIT_TODO = '[todo] EDIT_TODO',
  COMPLETE = '[filter] COMPLETE',
  PENDING = '[filter] PENDING',
  ALL = '[filter] ALL'
}

export class SetTodos implements Action {
  readonly type = TodosActionTypes.SET_TODOS;
  constructor(public payload: any) {}
}

export class GetTodos implements Action {
  readonly type = TodosActionTypes.GET_TODOS;
}

export class AddTodo implements Action {
  readonly type = TodosActionTypes.ADD_TODO;
  constructor(public payload: any) {}
}

export class UpdateTodo implements Action {
  readonly type = TodosActionTypes.UPDATE_TODO;
  constructor(public payload: any) {}
}

export class DeleteTodo implements Action {
  readonly type = TodosActionTypes.DELETE_TODO;
  constructor(public payload: any) {}
}
export class CompleteTodo implements Action {
  readonly type = TodosActionTypes.COMPLETE_TODO;
  constructor(public payload: any) {}
}

export class EditTodo implements Action {
  readonly type = TodosActionTypes.EDIT_TODO;
  constructor(public payload: any) {}
}

export class Complete implements Action {
  readonly type = TodosActionTypes.COMPLETE;
}

export class Pending implements Action {
  readonly type = TodosActionTypes.PENDING;
}

export class All implements Action {
  readonly type = TodosActionTypes.ALL;
}

export type AllTodosActions =
  | GetTodos
  | SetTodos
  | AddTodo
  | UpdateTodo
  | DeleteTodo
  | CompleteTodo
  | EditTodo
  | Complete
  | Pending
  | All;
