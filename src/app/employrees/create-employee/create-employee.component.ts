import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { Employee } from './../../models/employee.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',

  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
  toggleShowImg() {
    this.previewPhoto = !this.previewPhoto
  }

}
