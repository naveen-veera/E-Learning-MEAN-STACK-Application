import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  ngOnInit() {
  }


}

