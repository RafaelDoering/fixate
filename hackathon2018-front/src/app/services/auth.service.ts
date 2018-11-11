import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backendURL = 'http://localhost:3000/auth/';
  logged: boolean;
  loggedUserName: string;
  loggedUserIsAdmin: boolean;

  signup(name: string, email: string, password: string) {
    return this.httpClient.post(`${this.backendURL}signup`, {name, email, password}).pipe(
      map(res => this.setSession(res))
    );
  }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.backendURL}login`, {email, password}).pipe(
      map(res => this.setSession(res))
    );
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult.token);

    this.logged = true;
    this.loggedUserName = authResult.user.name;
    this.loggedUserIsAdmin = authResult.user.isAdmin;
  }

  logout() {
    localStorage.removeItem('token');

    this.logged = false;
    this.loggedUserName = null;
    this.loggedUserIsAdmin = false;
  }

  constructor(private httpClient: HttpClient) { }
}
