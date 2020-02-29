import { Component } from '@angular/core';
import { RegisterModel } from './register.model';
import RegisterForm from './register.form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public model: RegisterModel;
  public form: RegisterForm;
  constructor(
    private router: Router,
  ) {
    this.model = new RegisterModel();
    this.form = new RegisterForm(this.model);
  }

  public onSubmit(form): void {
    console.log(form.value);
  }
}
