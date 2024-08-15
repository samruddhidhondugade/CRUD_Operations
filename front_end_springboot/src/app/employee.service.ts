import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl ="http://localhost:8080/employees"
  constructor(private http : HttpClient) { }

  getEmployeeList():Observable<any>
  {
    return this.http.get<any>(this.baseUrl)
  }

  createemployee(employee:Emp):Observable<object>{
    return this.http.post(`${this.baseUrl}`,employee)
  }

  getEmployeeById(id:number):Observable<Emp>{
        return this.http.get<Emp>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number,employee:Emp):Observable<Emp>{
    return this.http.put<Emp>(`${this.baseUrl}/${id}`,employee)
  }

  deleteEmployeeById(id:number):Observable<object>{
        return this.http.delete<Emp>(`${this.baseUrl}/${id}`);
  }
}
