import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  registerUrl = 'http://localhost:4000/api/register';
  loginUrl = 'http://localhost:4000/api/login';
  addUser(user) {
    return this.http.post(this.registerUrl, user);
  }
  loginUser(user) {
    return this.http.post(this.loginUrl, user);
  }
}
