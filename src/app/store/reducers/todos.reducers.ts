import { State } from "@ngrx/store";
import { Todo } from 'src/app/models/todos.model';
import { initialTodosState, ITodosState } from '../state/todos.state';
import { TodosActionTypes, AllTodosActions } from '../actions/todos.actions';

export function todosReducer(oldState = initialTodosState, action: AllTodosActions): ITodosState {
  const state = JSON.parse(JSON.stringify(oldState));  
  switch (action.type) {
    case TodosActionTypes.ADD_TODO_SUCCESS: {
      const newTodosArray = new Array<Todo>({
        id: String(state.todos.length + 1),
        text: action.payload,
        isCompleted: false, 
        isVisible: true
      });
      state.todos = state.todos.concat(newTodosArray);
      return state;
    }
    case TodosActionTypes.COMPLETE_TODO: {
      state.todos = state.todos.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isCompleted: true });
      });
      return state;
    }
    case TodosActionTypes.DELETE_TODO: {
      state.todos = state.todos.filter(todo => {
        return todo.id !== action.payload.id;
      });
      return state;
    }
    case TodosActionTypes.UPDATE_TODO: {
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
    case TodosActionTypes.EDIT_TODO: {
      state.todos = state.todos.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isEditabled: true });
      });
      return state;
    }
    case TodosActionTypes.ALL: {
      state.todos = state.todos.map(todo => {
        return Object.assign({}, todo, { isVisible: true });
      });
      return state;
    }
    case TodosActionTypes.PENDING: {
      state.todos = state.todos.map(todo => {
        if (!todo.isCompleted) {
          return Object.assign({}, todo, { isVisible: true });
        } else {
          return Object.assign({}, todo, { isVisible: false });
        }
      });
      return state;
    }
    case TodosActionTypes.COMPLETE: {
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
