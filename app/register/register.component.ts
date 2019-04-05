import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = {};

  constructor( private userService: UserService, private router: Router ) { }

  ngOnInit() {

  }

  addNewUser() {
    // console.log(this.userData);
    this.userService.addUser(this.userData).subscribe(res => {
      //console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    });
  }

}
