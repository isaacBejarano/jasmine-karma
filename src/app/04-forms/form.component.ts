import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class FormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
}
