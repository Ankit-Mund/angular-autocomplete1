import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../getusers.service'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  //dataset containing name of states
  states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
    , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
    , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];

  //array containing suggestions  
  filteredItems: Array<any>;

  //array containing items selected from suggestions
  selectedItems: Set<string> = new Set<string>();

  //variable for toggling the suggestions list view
  show: boolean;

  //new array of objects(isSelected key introduced)
  statesKey: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit() {

    //new array containing key-value pair('value':stateName, 'isSelected':boolean)
    this.statesKey = this.states.map(e => {
      return {
        'value': e,
        'isSelected': false
      }
    })
  }

  //input parameter - value of text-field(user input)
  //filters statesKey array and returns an array(suggestions) containing strings that match user input
  //if user clears the text input completely, no suggestions are shown
  filterValues(inputValue) {
    this.show = true;
    this.filteredItems = this.statesKey.filter(state => state.value.includes(inputValue.value));
    if (Object.keys(inputValue.value).length === 0) {
      this.filteredItems = [];
    }
  }

  //input parameters - selectedState, user input, index of state
  //adds the selected state to the selectedItems Set, sets isSelected flag to true and clears the text field
  addToSelectedItems(state, inputvalue, index) {
    this.filteredItems[index].isSelected = true;
    inputvalue.value = '';
    this.selectedItems.add(state);
  }

  //input parameter - name of state
  //searches for the state to be deleted in filteredItems array(suggestions), sets isSelected to false and deletes the state from selectedItems
  deleteItem(state) {
    let deleteState = this.filteredItems.find(each => each.value === state)
    deleteState.isSelected = false
    this.selectedItems.delete(state)
  }
}
