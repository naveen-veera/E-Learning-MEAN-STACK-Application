import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';    
import { map } from 'rxjs/operators';

import { Squad } from './squad.model'

@Injectable()
export class SquadService {
  selectedSquad : Squad;
  squads : Squad[];
  readonly baseURL = 'http://localhost:3000/squad';

  constructor( private http: HttpClient ) { }

  postUser(squad: Squad) {
    return this.http.post(this.baseURL, squad);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  getUser(id : string) {
    return this.http.get(this.baseURL  + `/${id}`);
  }

  putUser(squad : Squad) {
    return this.http.put(this.baseURL + `/${squad._id}`, squad);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }

}
