import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
  } from '@angular/forms';
import { Todo } from 'src/app/models/todos.model';

  /*
    ReactiveForm structure class
  */
  export default class NewTodoForm {
    private formBuilder: FormBuilder;
    public formGroup: FormGroup;
    public model: Todo;
  
    constructor(model: Todo) {
      this.formBuilder = new FormBuilder();
      this.model = model;
      this.createForm();
    }
  
    // Create form fields with validation rules
    public createForm() {
      this.formGroup = this.formBuilder.group({
        title: new FormControl(this.model.title, {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }),
        description: new FormControl(this.model.description, {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        })
      });
  
      // form update
      this.formGroup.valueChanges.subscribe((data: any) => {
        this.model.title = data.title;
        this.model.description = data.description;
      });
    }
  }