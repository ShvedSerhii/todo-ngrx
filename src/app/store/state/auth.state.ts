import { User } from 'src/app/models/user.model';

export interface IAuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialAuthState: IAuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};
