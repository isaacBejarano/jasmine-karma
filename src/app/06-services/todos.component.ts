import { TodoService } from './todo.service';

export class TodosComponent {
  todos: object[] = [];
  message: string;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe((t) => (this.todos = t));
  }

  add(object: object) {
    // { title: '... ' }
    this.service.add(object).subscribe(
      (t) => this.todos.push(t),
      (err) => (this.message = err)
    );
  }

  delete(id: string) {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }
}
