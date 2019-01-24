import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-delete',
  templateUrl: './checkbox-delete.component.html',
  styleUrls: ['./checkbox-delete.component.css']
})
export class CheckboxDeleteComponent implements OnInit {

  solutions = [
                {
                  id: 1,
                  title: 'Vendor Solution 1',
                  isChecked: false
                },
                {
                  id: 2,
                  title: 'Vendor Solution 2',
                  isChecked: false
                },
                {
                  id: 3,
                  title: 'CDO Solution',
                  isChecked: false
                },
                {
                  id: 4,
                  title: 'Network Solution',
                  isChecked: false
                },
                {
                  id: 5,
                  title: 'Vendor Solution 3',
                  isChecked: false
                }
              ]
  
  checkedSolutions = new Set();

  myDate = '2015-05-18 02:30:56'

  constructor() { }

  ngOnInit() {
  }

  select(solution){
    if(solution.isChecked){
      solution.isChecked=false;
      this.checkedSolutions.delete(solution);
    }
    else{
      solution.isChecked=true;
      this.checkedSolutions.add(solution);
    }
  }

}
