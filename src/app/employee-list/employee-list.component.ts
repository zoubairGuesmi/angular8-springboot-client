import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(){
    this.reloadData()
  }

  reloadData(){
    this.employeeService.getEmployeesList()
      .subscribe(resp => {
        this.employees = resp
      })
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(resp => {
      this.reloadData()
    })

  }

  employeeDetails(id: number){
    this.router.navigate(['details',id])
  }

}
