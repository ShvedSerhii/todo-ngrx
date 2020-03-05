import { State } from '@ngrx/store';
import { Todo } from 'src/app/models/todos.model';
import { initialTodosState, ITodosState } from '../state/todos.state';
import { TodosActionTypes, AllTodosActions } from '../actions/todos.actions';
import { of } from 'rxjs';

export function todosReducer(
  oldState = initialTodosState,
  action: AllTodosActions
): ITodosState {
  const state = JSON.parse(JSON.stringify(oldState));
  switch (action.type) {
    case TodosActionTypes.SET_TODOS: {
      state.todos = action.payload;
      return state;
    }
    case TodosActionTypes.EDIT_TODO: {
      state.todos = state.todos.map(todo => {
        return todo._id !== action.payload._id
          ? todo
          : Object.assign({}, todo, { isEditabled: true });
      });
      return state;
    }
    case TodosActionTypes.ALL: {
      state.todos = state.todos.map(todo => {
        return Object.assign({}, todo, { isVisible: false });
      });
      return state;
    }
    case TodosActionTypes.PENDING: {
      state.todos = state.todos.map(todo => {
        if (todo.status === 'done') {
          return Object.assign({}, todo, { isVisible: true });
        } else {
          return Object.assign({}, todo, { isVisible: false });
        }
      });
      return state;
    }
    case TodosActionTypes.COMPLETE: {
      state.todos = state.todos.map(todo => {
        if (todo.status === 'undone') {
          return Object.assign({}, todo, { isVisible: true });
        } else {
          return Object.assign({}, todo, { isVisible: false });
        }
      });
      return state;
    }
    default: {
      return state;
    }
  }
}
