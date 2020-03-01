import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  private _employeeId:number;
  constructor(private _activeRoute:ActivatedRoute,
              private employeeService: EmployeeService,
              private _router:Router) { }

  ngOnInit() {
    this._employeeId= +this._activeRoute.paramMap.subscribe(params => {
      this._employeeId= +params.get('id')
      this.employee= this.employeeService.getEmployee(this._employeeId)
    })
   
  }
  nextEmployee() {
    if (this._employeeId < 3) {
      this._employeeId= this._employeeId + 1;
    }
    else {
      this._employeeId= 1
    }
    this._router.navigate(['/employees',this._employeeId])
  }
}
