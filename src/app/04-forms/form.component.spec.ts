import { FormBuilder } from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent{}', () => {
  let myForm: FormComponent;

  // NOTE: Injections (fb: FormBuilder) are instanmces of injectable classes.
  beforeEach(() => {
    myForm = new FormComponent(new FormBuilder()); // instance before inject
  });

  // NOTE: contains() is an Angular reactive Form's FormGroup method. Not ES6.
  it('should create a form with 2 controls (name, email)', () => {
    expect(myForm.form.contains('name')).toBeTrue();
    expect(myForm.form.contains('email')).toBeTrue();
  });

  it(`should make the 'name' control required`, () => {
    let name = myForm.form.get('name');

    // name.setValue(`some user input for 'name'`); // <->  expect(name.valid).toBeTrue();
    name.setValue('');

    expect(name.valid).toBeFalse();
  });
});
