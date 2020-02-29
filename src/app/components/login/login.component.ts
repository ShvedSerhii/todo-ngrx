
import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import LoginForm from './login.form';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/services/cookies/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: LoginModel;
  public form: LoginForm;
  constructor(
    public cookie: CookiesService,
    private router: Router,
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  public onSubmit(form): void {
    console.log(form.value);
  }
}
