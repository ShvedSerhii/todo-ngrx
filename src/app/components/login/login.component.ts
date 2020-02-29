
import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import LoginForm from './login.form';
import { Router } from '@angular/router';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: LoginModel;
  public form: LoginForm;
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  public onSubmit(form): void {
    this.store.dispatch(new LogIn(form.value));
  }
}
