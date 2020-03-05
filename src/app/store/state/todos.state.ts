import { Todo } from 'src/app/models/todos.model';

export interface ITodosState {
  todos: Array<Todo>;
}

export const initialTodosState: ITodosState = {
  todos: []
};
