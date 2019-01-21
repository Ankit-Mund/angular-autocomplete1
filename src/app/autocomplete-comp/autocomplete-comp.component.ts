import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete-comp',
  templateUrl: './autocomplete-comp.component.html',
  styleUrls: ['./autocomplete-comp.component.css']
})
export class AutocompleteCompComponent implements OnInit {

  @Input()
  data;

  @Output()
  valueChange = new EventEmitter()

  show: boolean
  filteredItems: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  filterData(inputValue) {
    this.show = true;
    this.filteredItems = this.data.filter(datum => datum.includes(inputValue.value));
  }

  hide() {
    this.filteredItems = [];
    this.show = false;
  }

  sendValue(value) {
    console.log(value);
    this.hide()
  }

}
