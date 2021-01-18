import { Model } from './this';

describe('Dependency Injection Card{}<- Model{}', () => {
  'use strict';

  beforeEach(function () {
    this.model = new Model();
    this.model.setTitle = 'Some good Title';
  });

  // OJO! You need "function" with "THIS" to scope to immediatley parent function (beforeEach()) and it()
  // instead of pointing to the HO function (describre) of the suite

  it('should behave...', function () {
    expect(this.model).toEqual(
      jasmine.objectContaining({
        title: 'Some good Title',
      })
    );
  });

  // ...
});
