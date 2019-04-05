import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  getLoggedIn() {
    this.userService.loginUser(this.loginUserData).subscribe(res => {
      //console.log(res);
      localStorage.setItem('token', res.token)
      this.router.navigate(['/special']);
    });
  }

}
