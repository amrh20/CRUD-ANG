import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {


  employees: Employee[]= [
    {
      id: 1,
      name: 'test',
      gender: 'female',
      email: 'amr@TestBed.com',
      phoneNumber: '01010171701',
      dateOfBirth: new Date('20/9/994'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },
    {
      id: 2,
      name: 'test',
      gender: 'female',
      email: 'amr@TestBed.com',
      phoneNumber: '01010171701',
      dateOfBirth: new Date('20/9/994'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },
    {
      id: 3,
      name: 'test',
      gender: 'female',
      email: 'amr@TestBed.com',
      phoneNumber: '01010171701',
      dateOfBirth: new Date('20/9/994'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
