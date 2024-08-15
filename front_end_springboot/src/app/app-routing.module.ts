import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

const routes: Routes = [
  {path:'employees',component:EmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'createemployee',component:CreateemployeeComponent},
  {path:'updateemployee/:id',component:UpdateemployeeComponent},
  {path:'employeedetails/:id',component:EmployeedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
