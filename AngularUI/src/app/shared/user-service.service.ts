import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';    
import { map } from 'rxjs/operators';

import { User } from './user.model'

@Injectable()
export class UserServiceService {
  selectedUser : User;
  users : User[];
  readonly baseURL = 'http://localhost:3000/user';

  constructor( private http: HttpClient ) { }

  postUser(usr: User) {
    return this.http.post(this.baseURL, usr);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  getUser(id : string) {
    return this.http.get(this.baseURL  + `/${id}`);
  }

  putUser(usr: User) {
    return this.http.put(this.baseURL + `/${usr._id}`, usr);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }
}
