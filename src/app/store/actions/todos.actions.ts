import { Action } from "@ngrx/store";
import { Todo } from 'src/app/models/todos.model';

/**
 * declare contstants.
 */
export const ADD_TODO = "[todo] ADD_TODO";
export const UPDATE_TODO = "[todo] UPDATE_TODO";
export const DELETE_TODO = "[todo] DELETE_TODO";
export const COMPLETE_TODO = "[todo] COMPLETE_TODO";
export const EDIT_TODO = "[todo] EDIT_TODO";

export const COMPLETE = "[filter] COMPLETE";
export const PENDING = "[filter] PENDING";
export const DELETED = "[filter] DELETED";
export const ALL = "[filter] ALL";
/**
 * Add Todo action type.
 * @export
 * @class AddTodo
 * @implements {Action}
 */
export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: string) {}
}

/**
 * Update Todo action type.
 * @export
 * @class UpdateTodo
 * @implements {Action}
 */
export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: Todo) {}
}

/**
 * Delete Todo action type.
 * @export
 * @class DeleteTodo
 * @implements {Action}
 */
export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: Todo) {}
}
/**
 * Complete Todo action type.
 * @export
 * @class CompleteTodo
 * @implements {Action}
 */
export class CompleteTodo implements Action {
  readonly type = COMPLETE_TODO;

  constructor(public payload: Todo) {}
}

/**
 * Edit Todo action type
 * @export
 * @class EditTodo
 * @implements {Action}
 */
export class EditTodo implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: Todo) {}
}
/**
 * Complete filter action type
 * @export
 * @class Complete
 * @implements {Action}
 */
export class Complete implements Action {
  readonly type = COMPLETE;
}
/**
 * Pending filter action type
 * @export
 * @class Pending
 * @implements {Action}
 */
export class Pending implements Action {
  readonly type = PENDING;
}
/**
 * Deleted filter action type
 * @export
 * @class Deleted
 * @implements {Action}
 */
export class Deleted implements Action {
  readonly type = DELETED;
}
/**
 * All filter action type
 * @export
 * @class All
 * @implements {Action}
 */
export class All implements Action {
  readonly type = ALL;
}
/**
 * declare type all actions.
 */
export type AllTodosActions =
  | AddTodo
  | UpdateTodo
  | DeleteTodo
  | CompleteTodo
  | EditTodo
  | Complete
  | Pending
  | Deleted
  | All;
