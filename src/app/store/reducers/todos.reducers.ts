import { State } from "@ngrx/store";
import { Todo } from 'src/app/models/todos.model';
import { initialTodosState, ITodosState } from '../state/todos.state';
import { TodosActionTypes, AllTodosActions } from '../actions/todos.actions';
import { of } from 'rxjs';

export function todosReducer(oldState = initialTodosState, action: AllTodosActions): ITodosState {
  let state = JSON.parse(JSON.stringify(oldState));  
  switch (action.type) {
    case TodosActionTypes.SET_TODOS: {
      state.todos = action.payload;
      return state; 
    }
    // case TodosActionTypes.ADD_TODO_SUCCESS: {
    //   const newTodosArray = new Array<Todo>({
    //     _id: String(state.todos.length + 1),
    //     title: action.payload,
    //     status: false, 
    //     isVisible: true
    //   });
    //   state.todos = state.todos.concat(newTodosArray);
    //   return state;
    // }
    // case TodosActionTypes.COMPLETE_TODO: {
    //   state.todos = state.todos.map(todo => {
    //     return todo._id !== action.payload._id
    //       ? todo
    //       : Object.assign({}, todo, { status: true });
    //   });
    //   return state;
    // }
    // case TodosActionTypes.DELETE_TODO: {
    //   state.todos = state.todos.filter(todo => {
    //     return todo._id !== action.payload._id;
    //   });
    //   return state;
    // }
    // case TodosActionTypes.UPDATE_TODO: {
    //   state.todos = state.todos.map(todo => {
    //     return todo._id !== action.payload._id
    //       ? todo
    //       : Object.assign({}, todo, {
    //           isEditabled: false,
    //           title: action.payload.title
    //         });
    //   });
    //   return state;
    // }
    // case TodosActionTypes.EDIT_TODO: {
    //   state.todos = state.todos.map(todo => {
    //     return todo._id !== action.payload._id
    //       ? todo
    //       : Object.assign({}, todo, { isEditabled: true });
    //   });
    //   return state;
    // }
    case TodosActionTypes.ALL: {
      state.todos = state.todos.map(todo => {
        return Object.assign({}, todo, { isVisible: true });
      });
      return state;
    }
    case TodosActionTypes.PENDING: {
      state.todos = state.todos.map(todo => {
        if (!todo.status) {
          return Object.assign({}, todo, { isVisible: true });
        } else {
          return Object.assign({}, todo, { isVisible: false });
        }
      });
      return state;
    }
    case TodosActionTypes.COMPLETE: {
      state.todos = state.todos.map(todo => {
        if (!todo.status) {
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
