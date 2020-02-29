import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/list-employees/display-employee/display-employee.component';
import { CreateEmployeeDeactiveCard } from './employees/create-employe-can-deactive-card.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService,CreateEmployeeDeactiveCard],
  bootstrap: [AppComponent]
})
export class AppModule { }
