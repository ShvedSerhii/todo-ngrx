import { IAuthState, initialAuthState } from './auth.state';
import { ITodosState, initialTodosState } from './todos.state';

export interface IAppState {
  auth: IAuthState;
  todos: ITodosState;
}

export const initialAppState: IAppState = {
  auth: initialAuthState,
  todos: initialTodosState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
