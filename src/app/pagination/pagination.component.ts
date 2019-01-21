import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() users: Object;
  @Input() currentPage: number;
  @Input() pageNumber: Array<number>;

  @Output() goToPrev: EventEmitter<any> = new EventEmitter();
  @Output() goToNext: EventEmitter<any> = new EventEmitter();
  @Output() goToPage: EventEmitter<any> = new EventEmitter();
  // username : Array<any>;

  totalPages

  constructor() { }

  ngOnInit() {
    // this.users = this.users.data;
    // console.log(this.users)
    // console.log(this.pageNumber.length)
    // this.totalPages = 1;
  }

  ngOnChanges() {
    this.users = this.users['data'];
    this.totalPages = this.pageNumber.length
    console.log(this.totalPages,"HE")
  }

  goToPrevious() {
    // console.log("safkhl")
    this.goToPrev.emit()
  }

  toNext() {
    this.goToNext.emit()
  }

  // update(value){
  //   this.goToPage.emit(value)
  // }

  toPage(page) {
    this.goToPage.emit(page);
  }

}
