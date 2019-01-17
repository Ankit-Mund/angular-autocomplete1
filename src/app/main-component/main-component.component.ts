import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  users: Array<any>;
  response: Object;
  page: number = 2;
  totalPages: number;
  pageNumber: Array<number> = new Array<number>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers(this.page).subscribe(users => {
      this.response = users;// console.log(users.data)
      this.users = users.data;
      this.totalPages = users.total_pages;
      for (let i = 0; i < this.totalPages; i++) {
        this.pageNumber.push(i + 1)
      }
    })
  }

  // ngAfterContentInit(){
  //   console.log("DOCHECk")
  //   // this.userService.getUsers(this.page).subscribe(users => {
  //   //   this.response = users;// console.log(users.data)
  //   //   this.users = users.data;
  //   // })
  // }

  toPrev() {
    if (this.page === 1) {
      alert("This is the first page")
    }
    else {
      this.page = this.page - 1;
      this.userService.getUsers(this.page).subscribe(users => {
        this.response = users;// console.log(users.data)
        this.users = users.data;
      })
    }
  }

  toNext(value) {
    if (this.page === this.totalPages) {
      alert("This is the last page")
    }
    else {
      this.page = this.page + 1;
      this.userService.getUsers(this.page).subscribe(users => {
        this.response = users;// console.log(users.data)
        this.users = users.data;
      })

    }
  }

  toPage(page) {
    this.page = page;
    this.userService.getUsers(this.page).subscribe(users => {
      this.response = users;// console.log(users.data)
      this.users = users.data;
    })
    console.log(page, "sfklhhik")
  }
}
