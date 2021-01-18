import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';

describe('Todo Service <-()', () => {
  beforeEach(function () {
    this.http = new HttpClient(null /* abstract class HttpHandler*/);
    this.service = new TodoService(this.http);
  });
});
