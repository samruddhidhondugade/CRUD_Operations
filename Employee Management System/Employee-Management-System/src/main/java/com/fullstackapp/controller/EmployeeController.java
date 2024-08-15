package com.fullstackapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackapp.entity.Employee;
import com.fullstackapp.exception.ResourceNotFoundException;
import com.fullstackapp.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController //this annotation tells the spring container this class is request handler class
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	EmployeeRepository employeeRepository;
	
	//to get all employee
	@GetMapping("/")
	public List<Employee> getAllEmployees(){
		//here we use jpa repository method
		return employeeRepository.findAll();
	}
	
	//to create new employee
	@PostMapping("/")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//get by id
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not exist with id"+id));
		return ResponseEntity.ok(employee);
	}
	//update employee
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employeeDetails){
	Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not exist with id"+id));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setSalary(employeeDetails.getSalary());
		employeeRepository.save(employee);
		
		return ResponseEntity.ok(employee);
	}
	
	//delete employee
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable int id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not exist with id"+id));
		employeeRepository.delete(employee);
		Map<String,Boolean>response = new HashMap<String,Boolean>();
		response.put("delete",Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	}
	

