import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent implements OnInit {
  specialEvents: any;
  constructor( private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.userService.getSpecialEvents().subscribe(specialEvent => {
      this.specialEvents = specialEvent;
      // console.log(this.specialEvents);
    },
    err => {
      if(err instanceof HttpErrorResponse) {
        if (err.status === 401) {
            this.router.navigate(['/login']);
        }
        if (err.status === 500) {
          this.router.navigate(['/login']);
      }
      }
    }
    );
  }

}
