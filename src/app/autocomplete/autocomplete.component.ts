import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../getusers.service'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
    , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
    , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];
  filteredItems: string[];
  selectedItems: Set<string> = new Set<string>();
  inputText: string = '';
  show: boolean;
  selectedIndexes: Set<number> = new Set<number>();
  // isSelected: boolean = false;
  // getuser: Array<object> = []
  // constructor(private getuserservice: GetusersService) { }

  ngOnInit() {
    // // this.getuserservice.getUser().subscribe(response => {
    // //   this.getuser = response['data'];
    // })
  }


  filterValues(inputValue) {
    this.show = true
    
    this.filteredItems = this.states.filter(firstname => firstname.includes(inputValue.value));
    if (Object.keys(inputValue.value).length === 0) {
      this.filteredItems = [];
    }
  }

  addToSelectedItems(item, val, index) {
    this.show = false;
    val.value = '';
    this.selectedItems.add(item);
    this.selectedIndexes.add(index);
    // this.isSelected = true;
    // this.filteredArray = []  
  }

  deleteItem(item) {
    this.selectedItems.delete(item)
  }
}
