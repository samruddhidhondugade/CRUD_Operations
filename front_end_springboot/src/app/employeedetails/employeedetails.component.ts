import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {
 
  id:number=0;
  employee:Emp = new Emp();
  constructor(private route:ActivatedRoute,private employeeservice:EmployeeService){ }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
     this.employeeservice.getEmployeeById(this.id).subscribe((data)=>{
      this.employee = data;
     })
  }
  
}
