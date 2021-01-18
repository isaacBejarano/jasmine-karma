import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent{}', () => {
  beforeEach(function () {
    this.http = new HttpClient(null /* abstract class HttpHandler*/);
    this.service = new TodoService(this.http);
    this.component = new TodosComponent(this.service);
    // NOTE: from([]) <-- deconstruction [{id:1},...]
    this.fakeTodos = [{ id: 1 }, { id: 2 }];
    this.fakeAddedItem = { title: '...' };
    this.fakeDeleteItem = { msg: 'object was deleted' };
    // faking service method's returns or behaviour
    this.FAKEgetTodos = () => {
      return from<object[]>([
        this.fakeTodos, // any[]
      ]);
    };
    this.FAKEadd = from<object[]>([this.fakeAddedItem]); // any[]
    this.FAKEdelete = from<object[]>([this.fakeDeleteItem]); // any[]

    // return native Window object
    this._window = (): Window => window;
  });

  // mock REST API fetch service / fetching !== 'UNIT'
  it('should have "todos" length like API REST fetched items length', function () {
    spyOn(this.service, 'getTodos').and.callFake(this.FAKEgetTodos);

    this.component.ngOnInit(); // this.service, 'getTodos' ~spyOn()

    expect(this.component.todos.length).toBe(2);
  });

  it('should set "todos" with API REST fetched items', function () {
    spyOn(this.service, 'getTodos').and.callFake(this.FAKEgetTodos);

    this.component.ngOnInit(); // this.service, 'getTodos' ~spyOn()

    expect(this.component.todos).toBe(this.fakeTodos);
  });

  it('should update "todos" when POSTED -added- a new todo', function () {
    spyOn(this.service, 'add').and.returnValue(this.FAKEadd);

    this.component.add(this.fakeAddedItem); // this.service, 'add' ~spyOn()

    expect(this.component.todos).toEqual([this.fakeAddedItem]);
  });

  it('should delete a "todo" in REST API if user confirms', function () {
    spyOn(this._window(), 'confirm').and.returnValue(true);
    let spy = spyOn(this.service, 'delete').and.returnValue(this.FAKEdelete);

    this.component.delete('0001');

    expect(spy).toHaveBeenCalled();
  });
});
