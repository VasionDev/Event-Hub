import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getLoggedIn() {
    this.userService.loginUser(this.loginUserData).subscribe(res => {
      console.log(res);
    });
  }

}
