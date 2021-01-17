import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<object[]> {
    return this.http
      .get('...', {
        responseType: 'json',
      })
      .pipe(
        //
        map((r: object[]) => r.map((any: object) => any))
      );
  }

  add(todo: object): Observable<object[]> {
    return this.http
      .post('...', todo, {
        responseType: 'json',
      })
      .pipe(
        //
        map((r: object[]) => r.map((any: object) => any))
      );
  }

  delete(id: string): Observable<object[]> {
    return this.http
      .delete(`...${id}`, {
        responseType: 'json',
      })
      .pipe(
        //
        map((r: object[]) => r.map((any: object) => any))
      );
  }
}
