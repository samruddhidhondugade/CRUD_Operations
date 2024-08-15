import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Emp } from '../emp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

 
  employees:Emp[]=[]

  constructor(private empservice:EmployeeService,private router: Router){}

  ngOnInit():void{
      this.getEmployees()
  }

  private getEmployees(){
    this.empservice.getEmployeeList().subscribe((data)=>
      {
        this.employees=data
        console.log(this.employees)
      })
  }

  updateemployee(id:number){
     this.router.navigate(['updateemployee',id]);
  }

  viewemployee(id:number){
    this.router.navigate(['employeedetails',id]);
  }

  deleteemployee(id:number){
       this.empservice.deleteEmployeeById(id).subscribe((data)=>{
        console.log(data);
        this.getEmployees();
       })
  }

  
}
