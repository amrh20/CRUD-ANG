import { ActivatedRoute } from '@angular/router';
// detec change for input >> from parent to child

// 1- ngchange
// 2- getter and setter

import { Employee } from './../../../models/employee.model';
import { Component, OnInit, Input,OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<string>= new EventEmitter<string>();
  private _employee:Employee;
  private _selectedId:number;
  // getter and setter
  // @Input() 
  // 1- set employee(val :Employee) {
  //   console.log('Previous : ' + (this._employee ? this._employee.name : 'Null'))
  //   console.log('Current : ' + val.name)
  //   this._employee= val
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }
  constructor(private _router:ActivatedRoute) { }
  ngOnInit() {
    this._selectedId= +this._router.snapshot.paramMap.get('id')
  }
    
  // 2-ngOnchanges
   ngOnChanges( changes: SimpleChanges ) : void {
  //  const prevEmployee= <Employee>changes.employee.previousValue;
  //  const cuurentEmployee= <Employee>changes.employee.currentValue;
  //  console.log("prev Employee: " + (prevEmployee ? prevEmployee.name : 'Null'))
  //  console.log("cuurent Employee: " + cuurentEmployee.name )
 }
 handelData() {
   this.notify.emit(this.employee.name)
 }

}
