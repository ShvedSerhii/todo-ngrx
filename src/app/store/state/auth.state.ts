import { User } from 'src/app/models/user.model';

export interface IAuthState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialAuthState: IAuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};
