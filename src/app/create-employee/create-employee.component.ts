import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee
  submitted = false
  userForm: FormGroup;

  constructor(private employeeService: EmployeeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      emailId: ['',[Validators.required,Validators.email]]
    });
  }

  onSubmit(){
    this.employee = {
      id: ,
      firstName:this.userForm.value.formValue['firstName'],
      lastName:this.userForm.value.formValue['lastName'],
      emailId:this.userForm.value.formValue['emailId']
    }
    this.employeeService.createEmployee(this.employee)
    this.router.navigate(['employees'])
  }

}
