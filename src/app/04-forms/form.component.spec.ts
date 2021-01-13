import { FormBuilder } from '@angular/forms'; // requires since it's a dependency injection
import { FormComponent } from './form.component';

describe('FormComponent{}', () => {
  let myForm: FormComponent;

  // NOTE: Injections (fb: FormBuilder) are instances of injectable classes -> require them!
  beforeEach(() => {
    myForm = new FormComponent(new FormBuilder()); // instance before inject
  });

  // NOTE: contains() is an Angular reactive Form's FormGroup method. Not ES6, to Jasmine.
  it('should create a form with 2 controls (name, email)', () => {
    expect(myForm.form.contains('name')).toBeTrue();
    expect(myForm.form.contains('email')).toBeTrue();
  });

  // NOTE: setValue() is an Angular reactive Form's FormGroup method. Not ES6, to Jasmine.
  // Setting or Updating of Reactive Forms Form Control values can be done using both patchValue and setValue
  // we will want to use patchValue, if only updating partial controls
  // https://stackoverflow.com/questions/55275025/how-to-set-value-to-form-control-in-reactive-forms-in-angular
  it(`should make the 'name' control required`, () => {
    let name = myForm.form.get('name');

    // name.setValue(`some user input for 'name'`); // <->  expect(name.valid).toBeTrue();
    name.setValue('');

    expect(name.invalid).toBeTruthy(); // expect(name.valid).toBeFalse();
  });

  it(`should validate when 'name' control fulilled`, () => {
    let name = myForm.form.get('name');

    name.setValue('some user input for control "name"');

    expect(name.valid).toBeTruthy();
  });
});
