import { State } from "@ngrx/store";
import * as TodoActions from "../actions/todos.actions";
import { Todo } from 'src/app/models/todos.model';
import { initialTodosState, ITodosState } from '../state/todos.state';
import { AllTodosActions } from '../actions/todos.actions';

export function todosReducer(oldState = initialTodosState, action: AllTodosActions): ITodosState {
  const state = JSON.parse(JSON.stringify(oldState));  
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      const newTodosArray = new Array<Todo>({
        id: String(state.todos.length + 1),
        text: action.payload,
        isCompleted: false,
        isVisible: true
      });
      state.todos = state.todos.concat(newTodosArray);
      return state;
    }
    case TodoActions.COMPLETE_TODO: {
      state.todos = state.todos.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isCompleted: true });
      });
      return state;
    }
    case TodoActions.DELETE_TODO: {
      state.todos = state.todos.filter(todo => {
        return todo.id !== action.payload.id;
      });
      return state;
    }
    case TodoActions.UPDATE_TODO: {
      state.todos = state.todos.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, {
              isEditabled: false,
              text: action.payload.text
            });
      });
      return state;
    }
    case TodoActions.EDIT_TODO: {
      state.todos = state.todos.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isEditabled: true });
      });
      return state;
    }
    case TodoActions.ALL: {
      state.todos = state.todos.map(todo => {
        return Object.assign({}, todo, { isVisible: true });
      });
      return state;
    }
    case TodoActions.PENDING: {
      state.todos = state.todos.map(todo => {
        if (!todo.isCompleted) {
          return Object.assign({}, todo, { isVisible: true });
        } else {
          return Object.assign({}, todo, { isVisible: false });
        }
      });
      return state;
    }
    case TodoActions.COMPLETE: {
      state.todos = state.todos.map(todo => {
        if (!todo.isCompleted) {
          return Object.assign({}, todo, { isVisible: false });
        } else {
          return Object.assign({}, todo, { isVisible: true });
        }
      });
      return state;
    }
    default: {
      return state;
    }
  }
} 
