import { isAuthenticated } from './../../store/selectors/auth.selectors';

import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import LoginForm from './login.form';
import { Router } from '@angular/router';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: LoginModel;
  public form: LoginForm;
  public auth = this.store.pipe(select(isAuthenticated));
  constructor(
    private store: Store<IAppState>,
    private router: Router,
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  public onSubmit(form): void {
    this.store.dispatch(new LogIn(form.value));
  }
}
