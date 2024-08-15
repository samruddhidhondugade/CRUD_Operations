import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule,provideHttpClient } from '@angular/common/http';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { FormsModule } from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateemployeeComponent,
    UpdateemployeeComponent,
    EmployeedetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
