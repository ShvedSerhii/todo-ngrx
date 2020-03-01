import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITodosState } from '../state/todos.state';


const selectTodos = (state: IAppState) => state.todos;

export const getTodos = createSelector(
  selectTodos, 
  (state: ITodosState) => state.todos
);