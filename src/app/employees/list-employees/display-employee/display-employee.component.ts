import { Employee } from './../../../models/employee.model';
import { Component, OnInit, Input,OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input () employee: Employee;
  constructor() { }

  ngOnInit() {
  }
    
 ngOnChanges(changes :SimpleChange) {
   const prevEmployee= <Employee>changes.employee.previousValue;
   const cuurentEmployee= <Employee>changes.employee.currentValue;

   console.log("prev Employee: " + (prevEmployee ? prevEmployee.name : 'Null'))
   console.log("cuurent Employee: " + cuurentEmployee.name )
  console.log(changes)
 }
}
