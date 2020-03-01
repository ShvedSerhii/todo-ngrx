import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { authReducer } from './auth.reducers';
import { todosReducer } from './todos.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  auth: authReducer,
  todos: todosReducer
};
