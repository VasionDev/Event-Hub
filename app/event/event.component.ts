import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;
  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.userService.getEvents().subscribe(event => {
      this.events = event;
      // console.log(this.events);
    });
  }

}
