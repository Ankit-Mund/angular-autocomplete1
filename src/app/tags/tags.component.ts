import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags = ['tag1','tag2','tag3','tag4','tag5'];
  tagsLength: number;
  constructor() { }

  ngOnInit() {
    this.tagsLength = this.tags.length - 1;
  }

}
