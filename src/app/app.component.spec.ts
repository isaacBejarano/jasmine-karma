import { AppComponent } from './app.component'; // UNIT-TEST
import { TestBed } from '@angular/core/testing'; // INTEGRATION on HTML template

// NOTE: readability 'AAA', space separated. (Arange, Act, Assert)

// 1. UNIT-TEST
describe('AppComponent{}', () => {
  let app = new AppComponent(); // AAA_Arrange -> instance of sys to test

  // 1.1. tests outside hooks
  it('should create the app', () => {
    expect(app).toBeDefined(); // AAA_Assert
  });

  it(`should have as instance 'app'`, () => {
    expect(app).toBeInstanceOf(AppComponent); // AAA_Assert
  });

  // 1.2. tests within hooks
  it(`should have as title 'test-angular-ten'`, () => {
    app.ngOnInit(); // AAA_Act -> call Fn, methods

    expect(app.title).toEqual('test-angular-ten'); // AAA_Assert -> the spec
  });
});

// 2. INTEGRATION TEST
describe('AppComponent HMTL', () => {
  it(`should render 'title'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // fake
    fixture.detectChanges(); // hook

    const DOM = fixture.nativeElement; // fake DOM
    const ref = DOM.querySelector('.content span').textContent; // fake REF

    expect(ref).toContain('test-angular-ten');
  });
});
