import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { Employee } from './../../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',

  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm:NgForm;
  previewPhoto= false;
  departmants: Department[] =[
    { id:1, name: 'It'},
    { id:2, name: 'Cs'}
  ]

  employee: Employee= 
    {
      id: null,
      name: null,
      gender: null,
      email: null,
      phoneNumber: null,
      dateOfBirth: null,
      department: null,
      isActive: null,
      photoPath: null
    }
  
  constructor(private _employeeService:EmployeeService,
    private _router:Router) { }

  ngOnInit() {
  }

  saveEmployee() {
    this._employeeService.saveEmployee(this.employee);
    this._router.navigate(['list'])
  }
  toggleShowImg() {
    this.previewPhoto = !this.previewPhoto
  }

}
