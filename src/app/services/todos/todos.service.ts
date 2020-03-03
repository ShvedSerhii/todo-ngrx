import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../cookies/cookies.service';
import { Todo } from 'src/app/models/todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private BASE_URL = 'https://lectorium.herokuapp.com';

  constructor(private http: HttpClient, private cookie: CookiesService) {}

  addTodo(payload: string): Observable<any> {
    const url = `${this.BASE_URL}/api/todolist`;
    const httpOptions = {
      headers: new HttpHeaders({
        'x-apikey': this.cookie.getCookie('token'),
        'Content-Type': 'application/json'
      })
    };
    const data = {
      userId: this.cookie.getCookie('token'),
      title: payload,
      description: payload,
      status: 'undone',
      selected: false
  };
    return this.http.post(url, data, httpOptions);
  }

  getTodos(): Observable<any> {
    const url = `${this.BASE_URL}/api/todolist`;
    const httpOptions = {
      headers: new HttpHeaders({
        'x-apikey': this.cookie.getCookie('token')
      })
    };
    return this.http.get(url, httpOptions);
  }

  deleteTodo(payload: Todo): Observable<any> {
    const url = `${this.BASE_URL}/api/todolist/${payload._id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'x-apikey': this.cookie.getCookie('token')
      })
    };
    return this.http.delete(url, httpOptions);
  }

  updateTodo(payload: Todo): Observable<any> {
    const url = `${this.BASE_URL}/api/todolist/${payload._id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'x-apikey': this.cookie.getCookie('token'),
        'Content-Type': 'application/json'
      })
    };
    const data = {
      userId: this.cookie.getCookie('token'),
      title: payload.title,
      description: payload.title,
      status: payload.status,
      selected: false
  };
    return this.http.put(url, JSON.stringify(data), httpOptions);
  }
}

