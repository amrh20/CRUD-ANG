import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
 private listemployess:Employee[]= [
    {
      id: 1,
      name: 'employee one',
      gender: 'female',
      email: 'test@Test.com',
      phoneNumber: '01010171701',
      dateOfBirth: new Date('20/9/994'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },
    {
      id: 2,
      name: 'nynynynynynyn',
      gender: 'female',
      email: 'test@Test.com',
      phoneNumber: '01010171701',
      dateOfBirth: new Date('20/9/994'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/nynyny.jpg'
    },
    {
      id: 3,
      name: 'employee three',
      gender: 'female',
      email: 'test@Test.com',
      phoneNumber: '01010171701',
      dateOfBirth: new Date('20/9/994'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/user_image.png'
    }
]

getEmployess() :Employee[] {
    return this.listemployess
}
saveEmployee(employee: Employee) {
    this.listemployess.push(employee)
  }
  constructor() { }
}
