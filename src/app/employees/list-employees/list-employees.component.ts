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
  filteredemployees: Employee[];
  displayEmployee: Employee;
  private arrayIndex=1;
  presentData: string;
  private _searchTerm:string;
  get searchTerm():string {
    return this._searchTerm;
  }
  set searchTerm(value :string) {
    this._searchTerm= value;
    this.filteredemployees= this.filteredemployee(value);
  }
  filteredemployee(searchString: string) {
    return this.employees.filter(
      employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }
  constructor(private _employessService:EmployeeService,
              private _router:Router) { 
    this.employees= this._employessService.getEmployess()
  }

  ngOnInit() {
    this.displayEmployee= this.employees[0];
    this.filteredemployees= this.employees;
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
