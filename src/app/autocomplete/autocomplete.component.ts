import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../getusers.service'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  // states = ['Alabama', 'Alaska',  'Arizona', 'Arkansas', 'California', 'Colorado',
  // 'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
  // , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
  // , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  // 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  // 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  // 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
  //  'West Virginia', 'Wisconsin', 'Wyoming'];
  filteredArray: string[];
  tempArray: string[];
  getuser: Array<object> = []
  constructor(private getuserservice: GetusersService) { }

  ngOnInit() {
    this.getuserservice.getUser().subscribe(response => {
      this.getuser = response['data'];
    })
  }


  filterValues(inputValue) {
    let firstname = [];
    firstname = this.getuser.map(e => e['first_name'])
    //use map ...... forEach,filter,map
    this.filteredArray = firstname.filter(firstname => firstname.includes(inputValue.value) || firstname.includes(inputValue.value.toUpperCase()));
    if (Object.keys(inputValue.value).length === 0) {
      this.filteredArray = [];
    }
  }
}
