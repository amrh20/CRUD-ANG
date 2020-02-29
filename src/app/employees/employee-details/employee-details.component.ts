import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  constructor(private _activeRoute:ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    const id= +this._activeRoute.snapshot.params['id'];
    this.employee= this.employeeService.getEmployee(id)
  }



}
