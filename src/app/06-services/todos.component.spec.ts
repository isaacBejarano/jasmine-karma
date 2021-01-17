import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent{}', () => {
  beforeEach(function () {
    this.http = new HttpClient(null /* abstract class HttpHandler*/);
    this.service = new TodoService(this.http);
    this.component = new TodosComponent(this.service);
    this.fakeTodos = [
      { id: 1 },
      { id: 2 }, // ...
    ];
  });

  // mock REST API fetch service / fetching !== 'UNIT'
  it('should have "todos" length like API REST fetched items length', function () {
    spyOn(this.service, 'getTodos').and.callFake(() => {
      // from([]) <-- deconstruction [{id:1},...]
      return from<object[]>([
        this.fakeTodos, // any[]
      ]);
    });

    this.component.ngOnInit(); // this.service, 'getTodos' ~spyOn()

    expect(this.component.todos.length).toBe(2); // be specific in expect
  });

  it('should set "todos" with API REST fetched items', function () {
    spyOn(this.service, 'getTodos').and.callFake(() => {
      // from([]) <-- deconstruction [{id:1},...]
      return from<object[]>([
        this.fakeTodos, // any[]
      ]);
    });

    this.component.ngOnInit(); // this.service, 'getTodos' ~spyOn()

    expect(this.component.todos).toBe(this.fakeTodos); // be specific in expect
  });
});
