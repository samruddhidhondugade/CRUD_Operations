import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {
firstName: any;

emp:Emp = new Emp();

constructor(private employeeservice:EmployeeService,private route:Router){}

onSubmit(){
  this.insertEmployee();
  console.log(this.emp);
}

insertEmployee(){
  this.employeeservice.createemployee(this.emp).subscribe((data)=>{
    this.goToEmployeeList();
    console.log(data);
  })
}

goToEmployeeList(){
  this.route.navigate(['/employees']);
}
}
