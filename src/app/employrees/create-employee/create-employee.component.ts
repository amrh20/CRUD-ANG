import { Department } from './../../../../.history/src/app/models/department.model_20200223105120';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
