import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router ) { }
  registerUrl = 'http://localhost:4000/api/register';
  loginUrl = 'http://localhost:4000/api/login';
  eventUrl = 'http://localhost:4000/api/event/';
  specialEventUrl = 'http://localhost:4000/api/event/special';

  addUser(user) {
    return this.http.post(this.registerUrl, user);
  }
  loginUser(user) {
    return this.http.post(this.loginUrl, user);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getEvents() {
    return this.http.get(this.eventUrl);
  }
  getSpecialEvents() {
    return this.http.get(this.specialEventUrl);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  LogoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/event']);
  }

}
