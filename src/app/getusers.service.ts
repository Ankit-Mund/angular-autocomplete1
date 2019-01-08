import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './models/User'
import { of } from 'rxjs/observable/of';

@Injectable()
export class GetusersService {
  usersUrl = 'https://reqres.in/api/users?page=2';


  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl)
  }
}
