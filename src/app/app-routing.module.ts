import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { CreateEmployeeDeactiveCard } from './employees/create-employe-can-deactive-card.service';

const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'creatEmployee', 
    component: CreateEmployeeComponent,
    canDeactivate : [CreateEmployeeDeactiveCard]
  },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo:'/list', pathMatch:'full' }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }