import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginModel } from './login.model';
/*
    ReactiveForm structure class
  */
export default class LoginForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: LoginModel;

  constructor(model: LoginModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  // Create form fields with validation rules
  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, {
        validators: [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)],
        updateOn: 'change'
      }),
      password: new FormControl(this.model.password, {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/[0-9a-zA-Z]$/)
        ],
        updateOn: 'change'
      })
    });

    // form update
    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.email = data.email;
      this.model.password = data.password;
    });
  }
}
