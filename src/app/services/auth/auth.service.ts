import { CookiesService } from 'src/app/services/cookies/cookies.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private BASE_URL = 'https://lectorium.herokuapp.com';

  constructor(private http: HttpClient, private cookie: CookiesService) {}

  getToken(): string {
    return this.cookie.getCookie('token');
  }

  logIn(payload): Observable<any> {
    const url = `${this.BASE_URL}/api/login`;
    return this.http.post<User>(url, JSON.stringify(payload));
  }

  signUp(payload): Observable<User> {
    const url = `${this.BASE_URL}/api/registration`;
    return this.http.post<User>(url, payload);
  }
}
