import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http : HttpClient) { }

  getUsers(page):Observable<any> {
    console.log(page)
    let usersUrl : string = `https://reqres.in/api/users?page=${page}`;
    console.log(usersUrl);
    return this.http.get(usersUrl);
  }
  

}
