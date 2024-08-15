import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../emp';

@Component({
  selector: 'app-updateemployee',
  templateUrl:'./updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent {

  id:number=0
  employee:Emp = new Emp();

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){

  }

  ngOnInit():void{
   this.id=this.route.snapshot.params['id'];
   this.employeeService.getEmployeeById(this.id).subscribe((data)=>{
         this.employee=data;
   })
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe((data)=>{
      this.employee = data
      this.goToEmployeeList();
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
}
