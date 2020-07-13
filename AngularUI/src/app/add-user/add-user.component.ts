import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../shared/user-service.service';
import { User } from '../shared/user.model';

import {Router, ActivatedRoute, Params} from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  profileForm = new FormGroup({
    _id : new FormControl(''),
    first_name : new FormControl(''),
    last_name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    group : new FormControl(''),
    doj : new FormControl(''),
  });

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private userService : UserServiceService) { }
 
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.queryParams["id"];
    if(id){
      console.log(id);
      this.getUser(id);
    }
  }
    
  resetForm(profileForm) {
    if (profileForm){
      profileForm.reset();
    }
    this.userService.selectedUser = {
      _id : "",
      first_name :  "",
      last_name :  "",
      email :  "",
      phone:  null,
      group:  "",
      doj : "",
      type :  "",
    }
  }

  refreshUserList() {
    this.userService.getUserList()
    .subscribe((res) => { this.userService.users = res as User[]; });
  }

  getUser(id : string) {
    this.userService.getUser(id).subscribe((res) => {
      this.userService.selectedUser = res as User;
      this.profileForm = new FormGroup({
        _id : new FormControl(this.userService.selectedUser._id),
        first_name : new FormControl(this.userService.selectedUser.first_name),
        last_name : new FormControl(this.userService.selectedUser.last_name),
        email : new FormControl(this.userService.selectedUser.email),
        phone : new FormControl(this.userService.selectedUser.phone),
        group : new FormControl(this.userService.selectedUser.group),
        doj : new FormControl(this.userService.selectedUser.doj),
        type : new FormControl(this.userService.selectedUser.type)
      });
    });
  }

  onSubmit() {
    if (this.profileForm.value._id == '') {
      this.userService.postUser(this.profileForm.value).subscribe((res) => {
        this.resetForm(this.profileForm);
        this.refreshUserList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else{
      this.userService.putUser(this.profileForm.value).subscribe((res) => {
        this.resetForm(this.profileForm);
        this.refreshUserList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
    this.router.navigateByUrl('/users');
  }
}
