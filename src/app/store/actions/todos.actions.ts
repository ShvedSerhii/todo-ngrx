import { Action } from "@ngrx/store";
import { Todo } from 'src/app/models/todos.model';

export enum TodosActionTypes {
ADD_TODO = "[todo] ADD_TODO",
ADD_TODO_SUCCESS = "[todo] ADD_TODO_SUCCESS",
UPDATE_TODO = "[todo] UPDATE_TODO",
DELETE_TODO = "[todo] DELETE_TODO",
COMPLETE_TODO = "[todo] COMPLETE_TODO",
EDIT_TODO = "[todo] EDIT_TODO",
COMPLETE = "[filter] COMPLETE",
PENDING = "[filter] PENDING",
DELETED = "[filter] DELETED",
ALL = "[filter] ALL",
}

export class AddTodo implements Action {
  readonly type = TodosActionTypes.ADD_TODO;
  constructor(public payload: any) {}
}

export class AddTodoSuccess implements Action {
  readonly type = TodosActionTypes.ADD_TODO_SUCCESS;
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

export class Deleted implements Action {
  readonly type = TodosActionTypes.DELETED;
}

export class All implements Action {
  readonly type = TodosActionTypes.ALL;
} 

export type AllTodosActions =
  | AddTodo
  | AddTodoSuccess
  | UpdateTodo
  | DeleteTodo
  | CompleteTodo
  | EditTodo
  | Complete
  | Pending
  | Deleted
  | All;
 