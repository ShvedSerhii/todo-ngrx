import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { RegisterModel } from './register.model';

export default class RegisterForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: RegisterModel;

  constructor(model: RegisterModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

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
      }),
      name: new FormControl(this.model.name, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/[a-zA-Z]$/)
        ],
        updateOn: 'change'
      }),
      surname: new FormControl(this.model.surname, {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/[a-zA-Z]$/)
        ],
        updateOn: 'change'
      }),
      phone: new FormControl(this.model.phone, {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          )
        ],
        updateOn: 'change'
      })
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.email = data.email;
      this.model.password = data.password;
      this.model.name = data.name;
      this.model.surname = data.surname;
      this.model.phone = data.phone;
    });
  }
}
