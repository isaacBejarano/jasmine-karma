import { AppComponent } from './app.component'; // UNIT-TEST
import { TestBed } from '@angular/core/testing'; // INTEGRATION on HTML template

// 1. UNIT-TEST
describe('AppComponent{}', () => {
  // instance
  let app = new AppComponent();

  // 1.1. tests outside hooks
  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it(`should have as instance 'app'`, () => {
    expect(app).toBeInstanceOf(AppComponent);
  });

  // 1.2. tests within hooks
  it(`should have as title 'test-angular-ten'`, () => {
    app.ngOnInit();
    expect(app.title).toEqual('test-angular-ten');
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
