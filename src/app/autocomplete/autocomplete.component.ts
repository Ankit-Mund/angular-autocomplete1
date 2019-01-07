import { Component, OnInit } from '@angular/core';
import { GetusersService  } from '../getusers.service'

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
  yourNewArray: string[];
  tempArray: string[];
  getuser:Array<object> =[]
  constructor(private getuserservice : GetusersService) { }

  ngOnInit() {
    this.getuserservice.getUser().subscribe(response=>{
      console.log(response.data,"wf")
      this.getuser=response.data;
    })
  }


  filterValues(inputValue) {
    let firstname=[];
  this.getuser.forEach(eachObj => {
    // console.log(eachObj.first_name)
    // console.log(firstname)
    firstname.push(eachObj.first_name)
  })
  this.yourNewArray =firstname.filter(state => state.includes(inputValue.value));
  if(Object.keys(inputValue.value).length === 0){
    this.yourNewArray = [];
  }
}

}
