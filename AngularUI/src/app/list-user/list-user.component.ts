import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router} from '@angular/router'; 



import { UserServiceService } from '../shared/user-service.service';
import { User } from '../shared/user.model'

declare var M : any;

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers : [UserServiceService]
})
export class ListUserComponent implements OnInit {
 
  constructor(private router: Router,private userService: UserServiceService) { }

  displayedColumns: string[] = ['first_name', 'lastname', 'email', 'squad', 'option'];
  dataSource ;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refreshUserList();      
  }


  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
      this.dataSource = new MatTableDataSource<User>(this.userService.users)
      this.dataSource.paginator = this.paginator;
    }); 
  }
  

  onDelete(_id: string ){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.refreshUserList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

  onEdit(user : User){
    this.userService.selectedUser = user;
    console.log("Redirecting")
   this.router.navigateByUrl('/users/add?id='+user._id);
  }

}

