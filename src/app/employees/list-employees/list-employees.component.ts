import { Router } from '@angular/router';
import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  displayEmployee: Employee;
  private arrayIndex=1;
  presentData: string;
  constructor(private _employessService:EmployeeService,
              private _router:Router) { 
    this.employees= this._employessService.getEmployess()
  }

  ngOnInit() {
    this.displayEmployee= this.employees[0]
  }

  seeNext(): void {
    if(this.arrayIndex <= 2 ) {
      this.displayEmployee= this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.displayEmployee= this.employees[0];
      this.arrayIndex= 1
    }
  }

  handelData(event) {
    this.presentData= event;
  }
  employeeDetails(employeeId) {
  this._router.navigate(['/employees',employeeId])
  }
}
